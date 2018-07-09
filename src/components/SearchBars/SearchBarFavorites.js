import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import favoritesActions from '../../redux/actions/favorites';

const SearchBarFavorites = (props) =>{
    const {
        favorites,
        isSearchingFavorite,
    } = props
  
    const onInputChange = (term) => {
        let newObj = {}; 
        const newFavorites = Object.keys(favorites).map((key)=>{
            if(favorites[key].name.includes(term)){
                newObj[key] = favorites[key];
            }
        });
        isSearchingFavorite({term, newObj});
    }

    return (
        <input 
            placeholder={"Search Favorite by name"}
            onChange={(event) => onInputChange(event.target.value)} />
    );
}

function mapStateToProps (state) {
    const { favorites, } = state.favoritesReducer;
    
    return { favorites, };
};

const mapDispatchToProps = (dispatch) => {
  const { isSearchingFavorite } = favoritesActions.creators;

  return bindActionCreators({
    isSearchingFavorite,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarFavorites);