import React from 'react';
import PropTypes from 'prop-types';

import { FileDataType } from '../../state/file-data/types';
import { photoToDataUrl } from '../../util/fileData';

const FileDataDefault = {
  name: '',
  date: '',
  user_name: '',
  path: '',
  description: '',
  preview: '',
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
    this.handleImage = this.handleImage.bind(this);
    this.renderImage = this.renderImage.bind(this);
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

  renderImage() {
    const { path, preview } = this.state;
    return path ? (<img src={path} />) : null;
    return preview ? (
      <figure>
        <img src={preview} alt="preview of upload" />
        <figcaption>Preview</figcaption>
      </figure>) : null;
  }

  handleImage(e) {
    const { files } = e.target;
    const visualAsset = files[0];
    this.setState({ visualAsset });
    console.log(visualAsset);
    photoToDataUrl(visualAsset)
      .then((preview) => {
        this.setState({ preview });
      })
      .catch(console.error);
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

        <label>
          {this.renderImage()}

          <input
            name="path"
            type="file"
            onChange={this.handleImage}
          />

        </label>

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
