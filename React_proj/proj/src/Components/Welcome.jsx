import React from 'Welcome';

const texts = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ': )'];
const number_of_particle = 12;

const App = () => {
  return (
    <div>
      {texts.map((text, i) => (
        <div key={i} className={`background${i}`}>
          <div className="criterion">
            <div key={i} className={`text${i}`}>
              {text}
            </div>
            <div key={i} className={`frame${i}`}>
              {Array.from({ length: number_of_particle }, (_, j) => (
                <div key={j} className={`particle${i}${j}`} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Welcome;
