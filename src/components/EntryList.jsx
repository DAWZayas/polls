import React, { Component, PropTypes } from 'react';

export default class EntryList extends Component {

  constructor(props) {
    super(props);
  }

  handleAddButtonClick() {
    const { poll, onAddEntryClick } = this.props;
    const node = this.refs.title;
    const title =  node.value.trim();
    onAddEntryClick(poll.id, title);
    node.value = '';
  }

  handleRemoveButtonClick(idEntry) {
    this.props.onRemoveEntryClick(idEntry);
  }

  render() {
    const { entries } = this.props;

    return (
      <div className="panel-body">
          <h3>Entry Title</h3>
          <ul className="list-group">
            {
              entries.map( (entry, index) => <li key={index}>{entry.title}<button onClick={() => this.handleRemoveButtonClick(entry.id)} className="btn btn-warning">Remove</button></li> )
            }
         </ul>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Entry Title" ref="title"/>
            <span className="input-group-btn">
              <button className="btn btn-info" type="button" onClick={e => this.handleAddButtonClick(e)}>Add Entry</button>
            </span>
          </div>
      </div>
    );
  }
}

EntryList.propTypes = {
  poll: PropTypes.object.isRequired,
  entries: PropTypes.array,
  onAddEntryClick: PropTypes.func.isRequired,
  onRemoveEntryClick: PropTypes.func.isRequired
};

EntryList.defaultProps = { 
  entries: []
};