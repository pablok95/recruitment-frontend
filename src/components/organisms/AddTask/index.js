import { todosActions } from 'store/todos';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import './AddTask.styles.scss';
import { toastr } from 'react-redux-toastr';

export const validationSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too short!').max(50, 'Too long!').required('Title is required'),
  description: Yup.string().min(2, 'Too short!').max(50, 'Too long!')
});

function OrganismAddTask({ addTask }) {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values, formikHelpers) => {
      addTask(values);
      formikHelpers.resetForm();
      toastr.success('Task has been added', `Title: ${values.title}`);
    }
  });

  return (
    <div className="container add-task">
      <form className="add-task__form" onSubmit={formik.handleSubmit}>
        <div
          className={`add-task__form-item ${
            formik.touched.title && Boolean(formik.errors.title) ? 'add-task__form-item--error' : ''
          }`}
        >
          <label htmlFor="title">Title*</label>
          <input
            id="title"
            name="title"
            placeholder="Enter task title (required)"
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.touched.title && Boolean(formik.errors.title) ? (
            <p className="add-task__field-error">{formik.errors.title}</p>
          ) : null}
        </div>
        <div
          className={`add-task__form-item ${
            formik.touched.description && Boolean(formik.errors.description)
              ? 'add-task__form-item--error'
              : ''
          }`}
        >
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter task description (optional)"
            rows={2}
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          {formik.touched.description && Boolean(formik.errors.description) ? (
            <p className="add-task__field-error">{formik.errors.description}</p>
          ) : null}
        </div>

        <button className="button add-task__submit-button" type="submit" title="Add task">
          Add
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addTask: (item) => dispatch(todosActions.add(item))
});

export default connect(undefined, mapDispatchToProps)(OrganismAddTask);
