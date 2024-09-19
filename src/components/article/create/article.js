import React from 'react';
import stageStyle from '../../../css/article/stage.module.css';

function Article({ onChange }) {
  return (
    <div className={stageStyle.stage_article}>
      <form>
        <div className={stageStyle.form_group}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className={stageStyle.input}
            onChange={(e) => onChange('title', e.target.value)}
            required
          />
        </div>
        <div className={stageStyle.form_group}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className={stageStyle.textarea}
            rows="4"
            onChange={(e) => onChange('description', e.target.value)}
            required
          ></textarea>
        </div>
        <div className={stageStyle.form_group}>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            className={stageStyle.file_input}
            accept="image/*"
            onChange={(e) => onChange('image', e.target.files[0])}
          />
        </div>
      </form>
    </div>
  );
}

export default Article;
