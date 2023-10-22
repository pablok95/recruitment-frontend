import React from 'react';
import { validationSchema } from 'components/organisms/AddTask/index';

describe('Add task form', () => {
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
