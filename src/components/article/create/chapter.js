import React from 'react';
import stageStyle from '../../../css/article/stage.module.css';

function Chapter({
  chapters,
  handleChapterChange,
  handleSubChapterChange,
  handleSubSubChapterChange,
  addChapter,
  addSubChapter,
  addSubSubChapter,
}) {
  return (
    <div className={stageStyle.stage_chapters}>
      {chapters.map((chapter, chapterIndex) => (
        <div key={chapterIndex} className={stageStyle.form_group}>
          <label htmlFor={`chapter-title-${chapterIndex}`}>Chapter Title</label>
          <input
            type="text"
            id={`chapter-title-${chapterIndex}`}
            name={`chapter-title-${chapterIndex}`}
            className={stageStyle.input}
            value={chapter.title}
            onChange={(e) =>
              handleChapterChange(chapterIndex, 'title', e.target.value)
            }
            required
          />
          <label htmlFor={`chapter-description-${chapterIndex}`}>
            Chapter Description
          </label>
          <textarea
            id={`chapter-description-${chapterIndex}`}
            name={`chapter-description-${chapterIndex}`}
            className={stageStyle.textarea}
            rows="4"
            value={chapter.description}
            onChange={(e) =>
              handleChapterChange(chapterIndex, 'description', e.target.value)
            }
            required
          ></textarea>
          <button
            className={`${stageStyle.chapter_button} ${stageStyle.sub_button}`}
            type="button"
            onClick={() => addSubChapter(chapterIndex)}
          >
            Add Subchapter
          </button>
          {chapter.subChapters.map((subChapter, subChapterIndex) => (
            <div key={subChapterIndex} className={stageStyle.form_group}>
              <label
                htmlFor={`subchapter-title-${chapterIndex}-${subChapterIndex}`}
              >
                SubChapter Title
              </label>
              <input
                type="text"
                id={`subchapter-title-${chapterIndex}-${subChapterIndex}`}
                name={`subchapter-title-${chapterIndex}-${subChapterIndex}`}
                className={stageStyle.input}
                value={subChapter.title}
                onChange={(e) =>
                  handleSubChapterChange(
                    chapterIndex,
                    subChapterIndex,
                    'title',
                    e.target.value
                  )
                }
                required
              />
              <label
                htmlFor={`subchapter-description-${chapterIndex}-${subChapterIndex}`}
              >
                SubChapter Description
              </label>
              <textarea
                id={`subchapter-description-${chapterIndex}-${subChapterIndex}`}
                name={`subchapter-description-${chapterIndex}-${subChapterIndex}`}
                className={stageStyle.textarea}
                rows="4"
                value={subChapter.description}
                onChange={(e) =>
                  handleSubChapterChange(
                    chapterIndex,
                    subChapterIndex,
                    'description',
                    e.target.value
                  )
                }
                required
              ></textarea>
              <button
                className={`${stageStyle.chapter_button} ${stageStyle.section_button}`}
                type="button"
                onClick={() => addSubSubChapter(chapterIndex, subChapterIndex)}
              >
                Add Section
              </button>
              {subChapter.subSubChapters.map(
                (subSubChapter, subSubChapterIndex) => (
                  <div
                    key={subSubChapterIndex}
                    className={stageStyle.form_group}
                  >
                    <label
                      htmlFor={`subsubchapter-title-${chapterIndex}-${subChapterIndex}-${subSubChapterIndex}`}
                    >
                      Section Title
                    </label>
                    <input
                      type="text"
                      id={`subsubchapter-title-${chapterIndex}-${subChapterIndex}-${subSubChapterIndex}`}
                      name={`subsubchapter-title-${chapterIndex}-${subChapterIndex}-${subSubChapterIndex}`}
                      className={stageStyle.input}
                      value={subSubChapter.title}
                      onChange={(e) =>
                        handleSubSubChapterChange(
                          chapterIndex,
                          subChapterIndex,
                          subSubChapterIndex,
                          'title',
                          e.target.value
                        )
                      }
                      required
                    />
                    <label
                      htmlFor={`subsubchapter-description-${chapterIndex}-${subChapterIndex}-${subSubChapterIndex}`}
                    >
                      Section Description
                    </label>
                    <textarea
                      id={`subsubchapter-description-${chapterIndex}-${subChapterIndex}-${subSubChapterIndex}`}
                      name={`subsubchapter-description-${chapterIndex}-${subChapterIndex}-${subSubChapterIndex}`}
                      className={stageStyle.textarea}
                      rows="4"
                      value={subSubChapter.description}
                      onChange={(e) =>
                        handleSubSubChapterChange(
                          chapterIndex,
                          subChapterIndex,
                          subSubChapterIndex,
                          'description',
                          e.target.value
                        )
                      }
                      required
                    ></textarea>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      ))}
      <button
        className={stageStyle.chapter_button}
        type="button"
        onClick={addChapter}
      >
        Add Chapter
      </button>
    </div>
  );
}

export default Chapter;
