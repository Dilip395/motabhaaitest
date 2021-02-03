import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class FetchUser extends React.Component {
  state= {
  loading:true,
   person:null,
   products:[]
}
  async componentDidMount(){
    const url ="https://api.jikan.moe/v3/search/anime?q=naruto&amp;limit=16";
    const response = await fetch(url);
    const data = await response.json();
     this.setState({person:data.results[0], loading:false});
    console.log(data.results[0]);
  }


  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <>
<div class="input-group mb-3" id="searchbutton">
  <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-primary" type="button" id="button-addon2">Go</button>
  </div>
</div>

<div class="card" style={{width:"18rem"}}>
<img src={this.state.person.image_url}></img>
  <div class="card-body" style={{backgroundColor:"white"}}>
  {this.state.person.title}
  </div>
</div>
      </>
    );
 
  }
}