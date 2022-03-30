import React from 'react';

export default function More({ languages, habilities, volunteer }) {
  console.log(languages);
  return (
    <div>
      {
        languages.map(({ language, splevel, wrlevel }, index) => {
          return (
            <div key={index}>
              <p>{language}</p>
              <p>{splevel}</p>
              <p>{wrlevel}</p>
            </div>
          )
        })
      }
      {
        habilities.map((item, index) => {
          return (
            <div
              key={index}
            >{item}</div>
          )
        })
      }
      {
        volunteer.map(({ name, where, description }, index) => {
          return (
            <div key={index}>
              <p>{name}</p>
              <p>{where}</p>
              <p>{description}</p>
            </div>
          )
        })
      }
    </div>
  )
}
