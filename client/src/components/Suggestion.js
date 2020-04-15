import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Loading from './Loading';

const Suggestion = () => {
  const dispatch = useDispatch();
  const suggestionMessage = useSelector(state => state);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const sendSuggestion = async (event) => {
    event.preventDefault();
    if (name && message) {
      setLoading(true);
      const { data } = await axios.post('https://thawing-temple-80581.herokuapp.com', {
        name,
        message
      });
      dispatch({
        type: 'ADD_MESSAGE',
        payload: data
      });
    }
    setLoading(false);
  };
  return (
    <div style={{ paddingTop: '40px', height: '1000px', backgroundColor: '#fc7703' }}>
      <h1>Send a suggestions for this Website !!!</h1>
      <form onSubmit={ sendSuggestion } style={{ width: '500px', margin: 'auto', marginTop: '20px', marginBottom: '20px' }}>
        <div data-aos="fade-down-right">
          <div className="form-group">
            <h4>Your Name</h4>
            <input required onChange={ (e) => setName(e.target.value) } type="text" className="form-control" />
          </div>
        </div>
        <div data-aos="fade-down-left">
          <div className="form-group">
            <h4>Your Suggestions</h4>
            <textarea required onChange={ (e) => setMessage(e.target.value) } className="form-control" rows="3"></textarea>
          </div>
        </div>
        { loading ? <Loading /> : 
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-success shadow" style={{ height: '40px' }}>
            <i className="fas fa-envelope mx-1"></i>
              Send This Suggestions
            </button>
          </div>
        }
      </form>
      <h2>All of Your Suggestions</h2>
      <div style={{ height: '500px', overflow: 'auto', maxWidth: '900px', margin: 'auto' }}>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody style={{ overflowY: 'scroll' }}>
            { suggestionMessage && suggestionMessage.map(x => {
              return (
                <tr key={ x.id }>
                  <td> { x.name } </td>
                  <td> { x.message } </td>
                </tr>
              )
            }) }
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default Suggestion;