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
  const [error, setError] = useState("");

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchQuestions(userValues)
      .then(({ data: { results } }) => setFormData(results))
      .catch(() => setError("Unexpected error."));

    setShowGame(true);
  };

  if (showGame) {
    return <Game formData={formData} error={error} />;
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
