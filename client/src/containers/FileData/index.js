import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as fileDataActions from '../../state/file-data/actions';

import FileDataForm from '../../components/file-data-form';
import FileDataDisplay from '../../components/file-data-display';

import { FileDataType } from '../../state/file-data/types';

class FileData extends React.Component {
  componentWillMount() {
    const { fileDataInitialize } = this.props;
    fileDataInitialize();
  }

  render() {
    const {
      fileDataCreate,
      fileDataArray,
      fileDataDelete,
      fileDateUpdate,
    } = this.props;

    return (
      <div>
        <FileDataForm submitHandler={fileDataCreate} type="creator" />
        <FileDataDisplay
          toDisplay={fileDataArray}
          fileDataDelete={fileDataDelete}
          fileDateUpdate={fileDateUpdate}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fileDataArray: state.fileData,
});

const mapDispatchToProps = dispatch => ({
  fileDataCreate: fileData => dispatch(fileDataActions.create(fileData)),
  fileDataDelete: id => dispatch(fileDataActions.remove(id)),
  fileDataInitialize: () => dispatch(fileDataActions.init()),
  fileDateUpdate: fileData => dispatch(fileDataActions.update(fileData)),
});

FileData.propTypes = {
  fileDataInitialize: PropTypes.func.isRequired,
  fileDataArray: PropTypes.arrayOf(PropTypes.shape(FileDataType)).isRequired,
  fileDataCreate: PropTypes.func.isRequired,
  fileDataDelete: PropTypes.func.isRequired,
  fileDateUpdate: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FileData);
