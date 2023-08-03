import React, { useState } from 'react';

function CreateArea(props) {
  const { setNotes } = props;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [collapse, setCollapse] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    const note = {
      title,
      content,
      id: new Date().getTime(),
    };
    setNotes((prevState) => [...prevState, note]);
    setTitle('');
    setContent('');
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = (e) => {
    setCollapse(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} onClick={handleClick} onChange={handleChange} name="title" placeholder="Title" />
        {collapse && (
          <>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              name="content"
              placeholder="Take a note..."
              rows="3"
            />
            <button>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
