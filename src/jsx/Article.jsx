import React, {useState} from 'react';

const Article = ({title, description, text, image, author, date}) => {

    const [content, setContent] = useState(false);

    if(!content) {
        return (<div className="article">
                <h4 className="title">{title}</h4>
                <p className="description">{description}</p>
                <button onClick={() => setContent(true)} className="textButton btn btn-primary">Read all</button>
            </div>);
    } else {
        return (<div className="article">
                <h5 className="title">{title}</h5>
                <p className="description">{description}</p>
                <div className="content">
                    <p className="text">{text}</p>
                    <img src={image} alt="Illustration" className="illustration" />
                    <p>{author}</p>
                    <p>{date}</p>
                </div>
                <button onClick={() => setContent(false)} className="textButton btn btn-success">Hide</button>
            </div>);
    }
}

export default Article;