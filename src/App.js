import { fetchedLanguages } from "../api/api.js";
import SearchInput from "./SearchInput.js";
import SelectedLanguage from "./SelectedLanguage.js";
import Suggestion from "./Suggestion.js";

export default function App({ target }) {
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
      selectedIndex: 0,
      items: this.state.fetchedLanguages,
    });

    selectedLanguage.setState(this.state.selectedLanguages);
  };

  /// new Function 클로저
  const searchInput = new SearchInput({
    target,
    initialState: "",
    onChange: async (keyword) => {
      if (keyword.length === 0) {
        this.setState({
          fetchedLanguages: [],
        });
      } else {
        const lagnuages = await fetchedLanguages(keyword);

        this.setState({
          fetchedLanguages: lagnuages,
        });
      }
    },
  });

  const selectedLanguage = new SelectedLanguage({
    target,
    initialState: [],
  });

  const suggestion = new Suggestion({
    target,
    initialState: {
      items: [],
    },
    onSelect: (lagnuage) => {
      alert(lagnuage);

      const nextSelectedLanguages = [...this.state.selectedLanguages];

      const index = nextSelectedLanguages.findIndex(
        (selectedLanguages) => selectedLanguages === lagnuage
      );

      if (index > -1) {
        nextSelectedLanguages.splice(index, 1);
      }

      nextSelectedLanguages.push(lagnuage);

      this.setState({
        ...this.state,
        selectedLanguages: nextSelectedLanguages,
      });
    },
  });
}
