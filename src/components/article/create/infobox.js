import React, { useState } from 'react';
import Select from 'react-select';
import stageStyle from '../../../css/article/stage.module.css';

const infoBoxTypes = [
  { value: 'person', label: 'Person' },
  { value: 'building', label: 'Building' },
  { value: 'company', label: 'Company' },
  { value: 'event', label: 'Event' },
  { value: 'film', label: 'Film' },
  { value: 'book', label: 'Book' },
  { value: 'album', label: 'Album' },
  { value: 'animal', label: 'Animal' },
  { value: 'award', label: 'Award' },
  { value: 'song', label: 'Song' },
  { value: 'country', label: 'Country' },
  { value: 'university', label: 'University' },
  { value: 'museum', label: 'Museum' },
  { value: 'political', label: 'Political' },
];

function InfoBox({ onChange }) {
  const [selectedType, setSelectedType] = useState(null);
  const [infoBoxData, setInfoBoxData] = useState({});

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption);
    const newData = {};
    setInfoBoxData(newData);
    onChange(newData, selectedOption.value);
  };

  const handleFieldChange = (field, value) => {
    const newData = { ...infoBoxData, [field]: value };
    setInfoBoxData(newData);
    onChange(newData, selectedType.value);
  };

  const renderFields = () => {
    switch (selectedType?.value) {
      case 'person':
        return (
          <>
            <div className={stageStyle.form_group}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('full_name', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="birthDate">Birth Date</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('birth_date', e.target.value)
                }
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="placeOfBirth">Place of Birth</label>
              <input
                type="text"
                id="placeOfBirth"
                name="placeOfBirth"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('place_of_birth', e.target.value)
                }
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('nationality', e.target.value)
                }
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="educations">Educations</label>
              <input
                type="text"
                id="educations"
                name="educations"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('educations', e.target.value)
                }
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="occupations">Occupations</label>
              <input
                type="text"
                id="occupations"
                name="occupations"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('occupations', e.target.value)
                }
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="parents">Parents</label>
              <input
                type="text"
                id="parents"
                name="parents"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('parents', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="children">Children</label>
              <input
                type="text"
                id="children"
                name="children"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('children', e.target.value)}
              />
            </div>
          </>
        );
      case 'building':
        return (
          <>
            <div className={stageStyle.form_group}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('name', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('location', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="architect">Architect</label>
              <input
                type="text"
                id="architect"
                name="architect"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('architect', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="yearBuilt">Year Built</label>
              <input
                type="number"
                id="yearBuilt"
                name="yearBuilt"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('year_built', e.target.value)
                }
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="style">Style</label>
              <input
                type="text"
                id="style"
                name="style"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('style', e.target.value)}
              />
            </div>
          </>
        );
      case 'company':
        return (
          <>
            <div className={stageStyle.form_group}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('name', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="founded">Founded</label>
              <input
                type="date"
                id="founded"
                name="founded"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('founded', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="founder">Founder</label>
              <input
                type="text"
                id="founder"
                name="founder"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('founder', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="headquarters">Headquarters</label>
              <input
                type="text"
                id="headquarters"
                name="headquarters"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('headquarters', e.target.value)
                }
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="industry">Industry</label>
              <input
                type="text"
                id="industry"
                name="industry"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('industry', e.target.value)}
              />
            </div>
          </>
        );
      case 'event':
        return (
          <>
            <div className={stageStyle.form_group}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('title', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('date', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="locations">Locations</label>
              <input
                type="text"
                id="locations"
                name="locations"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('locations', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="organizers">Organizers</label>
              <input
                type="text"
                id="organizers"
                name="organizers"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('organizers', e.target.value)
                }
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="attendance">Attendance</label>
              <input
                type="number"
                id="attendance"
                name="attendance"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('attendance', e.target.value)
                }
              />
            </div>
          </>
        );
      case 'film':
        return (
          <>
            <div className={stageStyle.form_group}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('title', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="releaseDate">Release Date</label>
              <input
                type="date"
                id="releaseDate"
                name="releaseDate"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('release_date', e.target.value)
                }
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="director">Director</label>
              <input
                type="text"
                id="director"
                name="director"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('director', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                id="genre"
                name="genre"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('genre', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                id="duration"
                name="duration"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('duration', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="languages">Languages</label>
              <input
                type="text"
                id="languages"
                name="languages"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('languages', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="rating">Rating</label>
              <input
                type="number"
                step="0.1"
                id="rating"
                name="rating"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('rating', e.target.value)}
              />
            </div>
          </>
        );
      case 'book':
        return (
          <>
            <div className={stageStyle.form_group}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('title', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="authors">Authors</label>
              <input
                type="text"
                id="authors"
                name="authors"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('authors', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="publishDate">Publish Date</label>
              <input
                type="date"
                id="publishDate"
                name="publishDate"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('publish_date', e.target.value)
                }
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                id="genre"
                name="genre"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('genre', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="isbn">ISBN</label>
              <input
                type="text"
                id="isbn"
                name="isbn"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('isbn', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="pages">Pages</label>
              <input
                type="number"
                id="pages"
                name="pages"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('pages', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                id="publisher"
                name="publisher"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('publisher', e.target.value)}
              />
            </div>
          </>
        );
      case 'album':
        return (
          <>
            <div className={stageStyle.form_group}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('title', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="artists">Artists</label>
              <input
                type="text"
                id="artists"
                name="artists"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('artists', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="releaseDate">Release Date</label>
              <input
                type="date"
                id="releaseDate"
                name="releaseDate"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('release_date', e.target.value)
                }
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                id="genre"
                name="genre"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('genre', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="label">Label</label>
              <input
                type="text"
                id="label"
                name="label"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('label', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="tracks">Tracks</label>
              <input
                type="text"
                id="tracks"
                name="tracks"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('tracks', e.target.value)}
              />
            </div>
          </>
        );
      case 'animal':
        return (
          <>
            <div className={stageStyle.form_group}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('name', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="species">Species</label>
              <input
                type="text"
                id="species"
                name="species"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('species', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="habitat">Habitat</label>
              <input
                type="text"
                id="habitat"
                name="habitat"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('habitat', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="diet">Diet</label>
              <input
                type="text"
                id="diet"
                name="diet"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('diet', e.target.value)}
              />
            </div>
          </>
        );
      case 'award':
        return (
          <>
            <div className={stageStyle.form_group}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('name', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                name="category"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('category', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="year">Year</label>
              <input
                type="number"
                id="year"
                name="year"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('year', e.target.value)}
              />
            </div>
          </>
        );
      case 'song':
        return (
          <>
            <div className={stageStyle.form_group}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('title', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="artist">Artist</label>
              <input
                type="text"
                id="artist"
                name="artist"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('artist', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="releaseDate">Release Date</label>
              <input
                type="date"
                id="releaseDate"
                name="releaseDate"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('release_date', e.target.value)
                }
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                id="genre"
                name="genre"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('genre', e.target.value)}
              />
            </div>
          </>
        );
      case 'country':
        return (
          <>
            <div className={stageStyle.form_group}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('full_name', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="capital">Capital</label>
              <input
                type="text"
                id="capital"
                name="capital"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('capital', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="population">Population</label>
              <input
                type="number"
                id="population"
                name="population"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('population', e.target.value)
                }
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="region">Region</label>
              <input
                type="text"
                id="region"
                name="region"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('region', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="area">Area</label>
              <input
                type="number"
                step="0.01"
                id="area"
                name="area"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('area', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="currency">Currency</label>
              <input
                type="text"
                id="currency"
                name="currency"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('currency', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="officialLanguage">Official Language</label>
              <input
                type="text"
                id="officialLanguage"
                name="officialLanguage"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('official_language', e.target.value)
                }
              />
            </div>
          </>
        );
      case 'university':
        return (
          <>
            <div className={stageStyle.form_group}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('name', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('location', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="established">Established</label>
              <input
                type="date"
                id="established"
                name="established"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('established', e.target.value)
                }
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="students">Students</label>
              <input
                type="number"
                id="students"
                name="students"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('students', e.target.value)}
              />
            </div>
          </>
        );
      case 'museum':
        return (
          <>
            <div className={stageStyle.form_group}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('name', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('location', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="established">Established</label>
              <input
                type="date"
                id="established"
                name="established"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('established', e.target.value)
                }
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="collections">Collections</label>
              <input
                type="text"
                id="collections"
                name="collections"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('collections', e.target.value)
                }
              />
            </div>
          </>
        );
      case 'political':
        return (
          <>
            <div className={stageStyle.form_group}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('name', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="party">Party</label>
              <input
                type="text"
                id="party"
                name="party"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('party', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="position">Position</label>
              <input
                type="text"
                id="position"
                name="position"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('position', e.target.value)}
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="termStart">Term Start</label>
              <input
                type="date"
                id="termStart"
                name="termStart"
                className={stageStyle.input}
                onChange={(e) =>
                  handleFieldChange('term_start', e.target.value)
                }
              />
            </div>
            <div className={stageStyle.form_group}>
              <label htmlFor="termEnd">Term End</label>
              <input
                type="date"
                id="termEnd"
                name="termEnd"
                className={stageStyle.input}
                onChange={(e) => handleFieldChange('term_end', e.target.value)}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Select
        options={infoBoxTypes}
        onChange={handleTypeChange}
        value={selectedType}
        placeholder="Select InfoBox Type"
      />
      {selectedType && renderFields()}
    </div>
  );
}

export default InfoBox;
