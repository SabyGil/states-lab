import React from 'react';
import OneComment from './one-comment';

class Comments extends React.Component {
constructor(){
  super();
  this.state={
    newComments: ['working?'],
    input: ''
  }
  this.handleInput = this.handleInput.bind(this);
  this.handleClick = this.handleClick.bind(this);
}

handleClick(event) {
  event.preventDefault(); //
  // console.log('I just clicked this thing');

  this.setState({
    newComments: this.state.newComments.concat([this.state.input]),
    input: ''
  })
}
handleInput(e){
  // console.log("watch out Anonymous. i'm a hacker)");
  this.setState({
    input: e.target.value
  })

  console.log(`"handleInput update -" ${this.state.input}`)
}

componentDidUpdate(){
  // console.log("watch out Anonymous. i'm a hacker)");
  if(this.state.input !== ''){
    console.log("componentDidUpdate log - " + this.state.input)
  }
}


  render() {
    
    const comments = this.props.comments.map( (item, index) => <OneComment key={index} comment={item}/>)
    const newComments = this.state.newComments.map( (item, index) => <OneComment key={index} newComment={item}/>)

    return (
      <div>
        <form>
          <input
           placeholder="enter comment" 
           onChange={this.handleInput} 
           value={this.state.input}
          />

          <button onClick={ this.handleClick } >

            Add Comment

          </button>

           <div className="wrap">
            {newComments}
          </div>

          <div className="wrap">
            {comments}
          </div>

         

        </form>
      </div>
    );
  }
}


export default Comments;
