import React from 'react';
import PropTypes from 'prop-types';

import { FileDataType } from '../../state/file-data/types';

const FileDataDefault = {
  name: '',
  date: '',
  user_name: '',
  path: '',
  description: '',
};

const buttonMap = {
  creator: 'Save',
  updater: 'Update',

};

class FileDataForm extends React.Component {
  constructor(props) {
    super(props);
    const { fileData } = this.props;

    this.state = fileData;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const { submitHandler, type } = this.props;
    e.preventDefault();
    submitHandler(Object.assign({}, this.state));
    if (type === 'creator') {
      this.setState({ ...FileDataDefault });
    }
  }

  render() {
    const { type } = this.props;
    return (

      <form onSubmit={this.handleSubmit}>

        <input
          name="name"
          type="text"
          value={this.state.name}
          placeholder="File name"
          onChange={this.handleChange}
        />
        <input
          name="user_name"
          type="text"
          value={this.state.user_name}
          placeholder="Your name"
          onChange={this.handleChange}
        />
        <input
          name="description"
          type="text"
          value={this.state.description}
          placeholder="Enter a description"
          onChange={this.handleChange}
        />
        <input
          name="path"
          type="text"
          value={this.state.path}
          placeholder="Enter the filepath"
          onChange={this.handleChange}
        />

        <button type="submit">{buttonMap[type]}</button>

      </form>
    );
  }
}


FileDataForm.propTypes = {
  fileData: PropTypes.shape(FileDataType),
  submitHandler: PropTypes.func.isRequired,
  type: PropTypes.string,
};

FileDataForm.defaultProps = {
  fileData: FileDataDefault,
  type: 'creator',
};

export default FileDataForm;
