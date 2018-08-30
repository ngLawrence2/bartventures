import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: ''
    };
    this.update=this.update.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getBartStations(this.state.budget,"Dsa");
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }


  render() {

    return <div>
        <form className="budget">
          <input type="text" className="budget" onChange={this.update("budget")} value={this.state.budget} placeholder="Enter budget" />
          <button className='budget' onClick={this.handleSubmit}>Show results!</button>
        </form>
      </div>;
  }
}

export default Search;
