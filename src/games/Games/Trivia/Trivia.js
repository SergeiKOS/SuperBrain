import React, { useState } from "react";
import Form from "./components/Form/Form";
import Game from "./components/Game/Game";
import { fetchQuestions } from "./api";

function Trivia() {
  const [formData, setFormData] = useState([]);

  const [userValues, setUserValues] = useState({
    trivia_amount: "10",
    trivia_category: "",
    trivia_difficulty: "",
    trivia_type: "",
  });

  const [showGame, setShowGame] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fetchAPI = async () => {
      const {
        data: { results },
      } = await fetchQuestions(userValues);

      setFormData(results);
      setShowGame(true);
    };
    fetchAPI();
  };

  if (showGame) {
    return <Game formData={formData} />;
  } else {
    return (
      <Form
        userValues={userValues}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    );
  }
}

export default Trivia;
