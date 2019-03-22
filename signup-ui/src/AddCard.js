import React from 'react'





class AddCard extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        
        item: {
          name: '',
          location: '',
          kids: null
        }}
    }

    

    handleNameChanges = e => {
        e.preventDefault();      
        let item = {...this.state.item}
        item.name = e.target.value
        this.setState({item}) }

    handleLocationChanges = e => {
        e.preventDefault();      
        let item = {...this.state.item}
        item.location = e.target.value
        this.setState({item}) }

            
    handleKidsChanges = e => {
        e.preventDefault();      
        let item = {...this.state.item}
        item.kids = e.target.value
       this.setState({item}) }


       handleSubmit = e => {
        this.props.addItem(e, this.state.item)
        this.setState({
          item: {
            name: '',
            location: '',
            kids: null
          }
        });
      };
        
      //==============================================================

      
      // populateForm = (e, id) => {
      //   e.preventDefault();
      //   this.setState({
      //     item: this.state.items.find(item => item.id === id),
      //     isUpdating: true
      //   });
      //   this.props.history.push('/form');
      // };





    render() {
      return (
        <div className="PageForm" >
        
        <form className="PostForm" onSubmit={this.handleSubmit}>

        <h2> Add a post </h2>

        <input 
        className="INPUTS1"
        type="text"
        placeholder="Name"
        value={this.state.item.name}
        onChange={this.handleNameChanges}
        name="name"
        />

        <input className="INPUTS1"
        type="text"
        placeholder="Location"
        value={this.state.item.location}
        onChange={this.handleLocationChanges}
        name="location"
        />

        <input className="INPUTS1"
        type="number"
        placeholder="# of kids"
        value={this.state.item.kids}
        onChange={this.handleKidsChanges}
        name="kids"
        />
        <button className="INPUTS1" >Submit</button>
        </form>



        </div>
        
        
      );
    }
  }

  export default AddCard
  