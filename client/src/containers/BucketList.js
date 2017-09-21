import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

class BucketList extends Component{
  renderList(){
  	return this.props.bucketlist.map((bucketlist) => {
  		return (
  			<tr>
          <td key={bucketlist.title}>
              {bucketlist.title}
          </td>
          <td key={bucketlist.category}>
              {bucketlist.category}
          </td>
          <td key={bucketlist.due}>
              {bucketlist.due}
          </td>
        </tr>
  		);
  	});
  }


  render() {
    return (
      
        	<Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Category</th>
                <th>Finish By</th>
              </tr>
            </thead>
            <tbody>
            {this.renderList()}
            </tbody>
        	</Table>
      
    );
  }
}

//takes app state as arg.
//whatever gets returned will show up as props inside of band list

function mapStateToProps(state){
	return{
		bucketlist: state.bucketlist
	};
}


//export 
export default connect(mapStateToProps)(BucketList);