import React from "react";
import Article from "../components/Articls";
import axios from "axios";
const listData = [];
for (let i = 1; i < 23; i++) {
  listData.push({
    title: `Ant design ${i}`,
    description: "This is a ant design framework",
  });
}

class ArticleList extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then((res) => {
      this.setState({
        articles: res.data,
      });
    });
  }

  render() {
    return <Article data={this.state.articles}></Article>;
  }
}

export default ArticleList;
