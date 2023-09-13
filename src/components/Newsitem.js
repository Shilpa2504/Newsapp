import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date,source } = this.props;
    return (
      <div className="mt-3" >
        <div className="card"> {/*style={{ "width": "20rem","height":"400px" }} >*/}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}

          </span>
          <img src={!imageurl?'http://cdn.wionews.com/sites/default/files/2023/04/05/343322-untitled-design-2023-04-05t110829364.png' : imageurl} className="card-img-top" alt="..." style={{height:"150px",objectFit:"fill"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
           
            <p className="card-text text-danger"><small>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">read more</a>

          </div>
        </div>
      </div>
    )
  }
}
export default Newsitem