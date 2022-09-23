import { fetchedLanguages } from "../api/api.js";
import SearchInput from "./SearchInput.js";
import Suggestion from "./Suggestion.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };

    suggestion.setState({
      itmes: this.state.fetchedLanguages,
    });
  };

  const searchInput = new SearchInput({
    $target,
    initialState: "",
    onChange: async (keyword) => {
      if (keyword.length === 0) {
        this.setState({
          fetchedLanguages: [],
        });
      } else {
        const lagnuages = await fetchedLanguages(keyword);
        console.log(lagnuages, "lagnuages");
        this.setState({
          fetchedLanguages: lagnuages,
        });
      }
    },
  });

  const suggestion = new Suggestion({
    $target,
    initialState: {
      itmes: [],
    },
  });
}
