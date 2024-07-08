import Button from "./Button";

/* eslint-disable react/no-unknown-property */
const staticText = [
  {
    title: 'Lorem ipsum',
    descriptions: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ]
  },
  {
    title: 'Lorem ipsum',
    descriptions: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ]
  },
  {
    title: 'Lorem ipsum',
    descriptions: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ]
  },
];


const Footer = () => {

  const foo1 = () => {
    console.log(this);
  };

  function foo2(a, b) {
    console.log(arguments);
  }

  return (
    <div className="bg-slate-800 text-white">
      <Button onClick={foo1}>Foo 1</Button>
      <Button onClick={() => foo2('Spain', 'Valencia')}>Foo 2</Button>
      <div className="container flex flex-row justify-between pt-8 pb-12">
        {
          staticText.map((colum, index) => (
            <div key={index}>
              <p className="text-lg">{colum.title}</p>
              <ul>
                {colum.descriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))
        }
      </div>
      <div className='flex items-center gap-4 justify-center py-2'>
        <a
          href="https://creativecommons.org/licenses/by-nd/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
        >
          {
            [
              {
                src: 'https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1',
                name: 'CC'
              },
              {
                src: 'https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1',
                name: 'BY'
              }
            ].map(el => (
              <img
                key={el.name}
                className='h-6 inline-block'
                src={el.src}
                alt={el.name}
              />
            ))
          }
        </a>
        Developed By Super Cools Team
      </div>
    </div>
  );
};


export default Footer;