import stageStyle from '../../../css/article/stage.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Article from './article';
import Chapter from './chapter';
import InfoBox from './infobox';
import { createArticle } from '../../../api/routes/article';

function CreateArticle() {
  const [progress, setProgress] = useState([false, false, false, false]);
  const [currentStage, setCurrentStage] = useState(0);
  const [articleData, setArticleData] = useState({
    title: '',
    description: '',
    image: null, // Ensure this is null initially
  });
  const [chapters, setChapters] = useState([
    { title: '', description: '', subChapters: [] },
  ]);
  const [infoBoxData, setInfoBoxData] = useState({});
  const [infoBoxType, setInfoBoxType] = useState('');
  const navigate = useNavigate();

  const handleProgress = (index) => {
    const newProgress = [...progress];
    newProgress[index] = !newProgress[index];
    setProgress(newProgress);
  };

  const handleContinue = () => {
    if (currentStage < progress.length - 1) {
      const newProgress = [...progress];
      newProgress[currentStage] = true;
      setProgress(newProgress);
      setCurrentStage(currentStage + 1);
    } else {
      // Send POST request when all stages are completed
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStage > 0) {
      const newProgress = [...progress];
      newProgress[currentStage] = false;
      setProgress(newProgress);
      setCurrentStage(currentStage - 1);
    }
  };

  const addChapter = () => {
    setChapters([...chapters, { title: '', description: '', subChapters: [] }]);
  };

  const addSubChapter = (chapterIndex) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].subChapters.push({
      title: '',
      description: '',
      subSubChapters: [],
    });
    setChapters(newChapters);
  };

  const addSubSubChapter = (chapterIndex, subChapterIndex) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].subChapters[subChapterIndex].subSubChapters.push({
      title: '',
      description: '',
    });
    setChapters(newChapters);
  };

  const handleChapterChange = (index, field, value) => {
    const newChapters = [...chapters];
    newChapters[index][field] = value;
    setChapters(newChapters);
  };

  const handleSubChapterChange = (
    chapterIndex,
    subChapterIndex,
    field,
    value
  ) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].subChapters[subChapterIndex][field] = value;
    setChapters(newChapters);
  };

  const handleSubSubChapterChange = (
    chapterIndex,
    subChapterIndex,
    subSubChapterIndex,
    field,
    value
  ) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].subChapters[subChapterIndex].subSubChapters[
      subSubChapterIndex
    ][field] = value;
    setChapters(newChapters);
  };

  const handleInfoBoxChange = (data, type) => {
    setInfoBoxData(data);
    setInfoBoxType(type);
  };

  const handleArticleChange = (field, value) => {
    setArticleData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const formattedChapters = chapters.map((chapter) => ({
      Name: chapter.title,
      Content: chapter.description,
      Child: chapter.subChapters.map((subChapter) => ({
        Name: subChapter.title,
        Content: subChapter.description,
        Child: subChapter.subSubChapters.map((subSubChapter) => ({
          Name: subSubChapter.title,
          Content: subSubChapter.description,
          Child: [],
        })),
      })),
    }));

    const payload = {
      Article: {
        Title: articleData.title,
        Description: articleData.description,
      },
      Chapters: formattedChapters,
      InfoBoxType: infoBoxType, // Ensure InfoBoxType is correctly set
    };

    // Dynamically add the infoBoxData with the correct key
    if (infoBoxType) {
      payload[infoBoxType] = infoBoxData;
    }

    const formData = new FormData();
    formData.append('data', JSON.stringify(payload));
    if (articleData.image) {
      formData.append('image', articleData.image); // Ensure the key is "image"
    }

    createArticle(formData)
      .then((data) => {
        console.log('Success:', data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <main>
      <div className={stageStyle.main_container}>
        <div className={stageStyle.stages_of_development}>
          {['Article', 'Chapter and Subchapter', 'Information Box'].map(
            (name, index) => (
              <div key={index} id={name.toLowerCase().replace(/ /g, '-')}>
                <div className={stageStyle.progressIndicatorContainer}>
                  <div
                    id="progress-indicator"
                    onClick={() => handleProgress(index)}
                    className={`${stageStyle.progressIndicator} ${
                      progress[index] ? stageStyle.active : stageStyle.inactive
                    }`}
                  >
                    {progress[index] ? '✔' : index + 1}
                  </div>
                  <div id="process-name" className={stageStyle.processName}>
                    <h6>{name}</h6>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className={stageStyle.stage_content}>
          {currentStage === 0 && <Article onChange={handleArticleChange} />}
          {currentStage === 1 && (
            <Chapter
              chapters={chapters}
              handleChapterChange={handleChapterChange}
              handleSubChapterChange={handleSubChapterChange}
              handleSubSubChapterChange={handleSubSubChapterChange}
              addChapter={addChapter}
              addSubChapter={addSubChapter}
              addSubSubChapter={addSubSubChapter}
            />
          )}
          {currentStage === 2 && <InfoBox onChange={handleInfoBoxChange} />}
        </div>
        <div className={stageStyle.stage_footer_button}>
          <button
            type="button"
            className={stageStyle.cancel_button}
            onClick={handleBack}
            disabled={currentStage === 0}
          >
            Back
          </button>
          <button
            type="button"
            className={stageStyle.continue_button}
            onClick={handleContinue}
          >
            {currentStage < progress.length - 1 ? 'Continue' : 'Submit'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default CreateArticle;
