import React from "react";
import './search.css';


class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : [],
            searchResult : []
           
        }
        this.updateSearch = this.updateSearch.bind(this)
    }
     
    componentDidMount(){
        fetch("https://swapi.co/api/planets/")
        .then(res => res.json())
        .then((item) => {
          this.setState({
              data: item.results,
              searchResult : item.results
          })
          console.log(this.state.data)
     
})
    }
   updateSearch(newSearch){
      this.setState({
          searchResult : []
      })
      let data = this.state.data;
      let tempSearch = newSearch.target.value.toLowerCase();
      let tempData = data.filter(obj => {
          let objName = obj.name.toLowerCase();
          if(objName.indexOf(tempSearch) > -1){
              return obj
          }
      });
      this.setState({
          searchResult : tempData
      })
    }

   renderResult () {
       let data = this.state.searchResult;
       let defaultSize = 10
       const a = data.map((item, index) =>{ 
        defaultSize = parseInt(item.population)
        if (!defaultSize){
            defaultSize = 10;
        } else {
            defaultSize = item.population.length * 4
        }
       let b = {"fontSize":defaultSize};
       return(
        <div className="indent" key={index} style={b}>
            {item.name}_<span className = "item-population">{item.population}</span>
        </div>
    )}
    );
    return a
   } 
   render() {
        
        let searchResult = this.renderResult()
        return(
            <div className= "search-param">
                <input onChange = {this.updateSearch} type="text" className="form-control form-control-lg" placeholder="Search Planet..."/>
                <div className = "search-result">{searchResult}</div>
            </div>
        )
    }
}


export default Search;





   
