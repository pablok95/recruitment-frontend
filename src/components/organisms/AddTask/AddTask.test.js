import React from 'react';
import AddTask, { validationSchema } from 'components/organisms/AddTask/index';
import {Provider} from "react-redux";
import {render as rtlRender, screen} from '@testing-library/react';
import store from "store";

const render = () => {
  const Wrapper = ({children}) => <Provider store={store}>{children}</Provider>
  return rtlRender(<AddTask />, {wrapper: Wrapper})
}

describe('Add task form', () => {
  beforeEach(() => {
    render()
  })

  test('add task should be in the document', () => {
    const titleLabel = screen.getByLabelText("Title*")
    expect(titleLabel).toBeInTheDocument()
  })

  test("title field should have label", () => {
    const emailInputNode = screen.getByLabelText("Title*");
    expect(emailInputNode.getAttribute("name")).toBe("title");
  });

  test('validate function should pass on correct input ', async () => {
    const exampleData = {
      title: 'Example task title',
      description: 'Example task description'
    };

    const result = await validationSchema.isValid(exampleData);

    expect(result).toEqual(true);
  });

  test('validate function should fail on incorrect input ', async () => {
    const exampleData = {
      title: 'E',
      description: 'e'
    };

    const result = await validationSchema.isValid(exampleData);

    expect(result).toEqual(false);
  });
});
