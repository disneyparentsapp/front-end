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

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
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
            price: '',
            imageUrl: '',
            description: '',
            shipping: ''
          }
        });
      };
        

    render() {
      return (
        <div>
        
        <form onSubmit={this.handleSubmit}>
        <input 
        type="text"
        placeholder="Name"
        value={this.state.item.name}
        onChange={this.handleNameChanges}
        name="name"
        />

        <input 
        type="text"
        placeholder="Location"
        value={this.state.item.location}
        onChange={this.handleLocationChanges}
        name="location"
        />

        <input 
        type="number"
        placeholder="# of kids"
        value={this.state.item.kids}
        onChange={this.handleKidsChanges}
        name="kids"
        />
        <button>Submit</button>
        </form>
        </div>
        
        
      );
    }
  }

  export default AddCard
  