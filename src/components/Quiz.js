import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const url = process.env.NODE_ENV === 'production' 
            ? process.env.PUBLIC_URL + '/data.xlsx' 
            : 'data.xlsx';
      console.log("현재 url", url);
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'buffer' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setQuizData(data);
      setCurrentQuizIndex(Math.floor(Math.random() * data.length));
    }
    fetchData();
  }, []);

  const handleNextQuiz = () => {
    setUserAnswer('');
    setFeedbackMessage('');
    setShowFeedback(false);
    setCurrentQuizIndex(Math.floor(Math.random() * quizData.length));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const correct = userAnswer.trim().toLowerCase() === quizData[currentQuizIndex].answer.toLowerCase();
    setIsCorrect(correct);
    setFeedbackMessage(correct ? '정답입니다!' : '틀렸습니다!');
    setShowFeedback(true);
    setTimeout(handleNextQuiz, 2000); // 2초 후 다음 문제로 자동 전환
  };

  if (quizData.length === 0 || currentQuizIndex === null) return <div>Loading...</div>;

  return (
    <div>
      <h2>{quizData[currentQuizIndex].description}</h2>
      <a>임시 정답 : {quizData[currentQuizIndex].hint}</a>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          required
        />
        {!showFeedback && <button type="submit">제출</button>}  
      </form>
      {showFeedback && (
        <div className={`feedback-message ${isCorrect ? 'correct' : 'incorrect'}`}>
          {feedbackMessage}
        </div>
      )}
    </div>
  );
}

export default Quiz;
