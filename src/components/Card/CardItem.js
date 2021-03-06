import React  from 'react';
import PropTypes from 'prop-types';
import ArticleText from '../Article/ArticleText';
import ArticleTitle from '../Article/ArticleTitle';
import ArticleImage from "../Article/ArticleImage";
const CardItem = (props) => (
    <li id={props.id}>
	
        <ArticleImage
            src={props.src}
        />
        <ArticleTitle
            title={props.title}
        />
        <ArticleText
            text={props.text}
        />
	
    </li>

);

CardItem.propTypes = {
    id: PropTypes.number.isRequired,
    src:PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
};
CardItem.defaultTypes = {
    id: '0',
    src:'',
    title: '',
    text:''
};

export default CardItem;