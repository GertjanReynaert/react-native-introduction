// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Layout,
  Heading,
  ListItem,
  List,
  Quote,
  Spectacle,
  Slide,
  Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white", // White
  secondary: "#1F2022", // Dark gray
  tertiary: "#03A9FC", // Blue
  quartenary: "#CECECE" // Light gray
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck
          theme={theme}
          bgColor="primary"
          textColor="secondary"
          progress="bar"
          transition={["fade", "slide"]}
          transitionDuration={500}
        >
          <Slide>
            <Heading size={1} lineHeight={1} style={{ marginBottom: 30 }}>
              React
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ marginBottom: 30 }}>
              Thinking in React
            </Heading>

            <List>
              <ListItem>Step 1: UI to component hierarchy</ListItem>
              <ListItem>Step 2: Build A Static Version</ListItem>
              <ListItem>Step 3: Identify the UI state</ListItem>
              <ListItem>Step 4: Identify the place for your state</ListItem>
              <ListItem>Step 5: Add Inverse Data Flow</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ marginBottom: 30 }}>
              JSX
            </Heading>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ marginBottom: 30 }}>
              Templates
            </Heading>

            <CodePane
              style={{ fontSize: 18 }}
              lang="xml"
              source={`
              <div>
                <h1>Hello!</h1>
                <h2>Good to see you here.</h2>
              </div>
              `}
            />
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ marginBottom: 30 }}>
              JSX
            </Heading>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ marginBottom: 30 }}>
              Expressions
            </Heading>

            <CodePane
              style={{ fontSize: 18 }}
              lang="jsx"
              source={`function fullName(user) {
      return user.firstName + ' ' + user.lastName;
    }

    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };

    const element = (
      <h1>
        Hello, {fullName(user)}!
      </h1>
    );        `}
            />
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ marginBottom: 30 }}>
              JSX
            </Heading>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ marginBottom: 30 }}>
              is code
            </Heading>

            <CodePane
              style={{ fontSize: 18 }}
              lang="jsx"
              source={`function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  } `}
            />
          </Slide>

          {/*<Slide
            notes={`
            <ul>
              <li>XML markup</li>
              <li>Looks like html, but isn't</li>
              <li>Compiles to Javascript</li>
            </ul>
            `}
          >
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ marginBottom: 30 }}>
              JSX
            </Heading>

            <Layout>
              <Fill style={{ marginRight: 20 }}>
                <Text>From</Text>
                <CodePane
                  lang="xml"
                  source={" <div className=\"sidebar\" /> "}
                />
              </Fill>

              <Fill>
                <Text>To</Text>
                <CodePane
                  lang="js"
                  source={"React.createElement( 'div', { className: 'sidebar' }, null) "}
                />
              </Fill>
            </Layout>
          </Slide>*/}

          {/*<Slide>
            <Heading size={1} lineHeight={1} style={{ marginBottom: 30 }}>
              Virtual DOM
            </Heading>
          </Slide>*/}

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ marginBottom: 30 }}>
              Components
            </Heading>

            <List>
              <ListItem>React.createClass({})</ListItem>
              <ListItem>Stateless component</ListItem>
              <ListItem>class x extends React.Component</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ marginBottom: 30 }}>
              Components
            </Heading>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ marginBottom: 30 }}>
              Stateless
            </Heading>

            <CodePane
              style={{ fontSize: 18 }}
              lang="jsx"
              source={`const FullName = (props) => {
    return (
      <p>{ props.firstName } { props.lastName}</p>
    );
  } `}
            />

            <CodePane
              style={{ marginTop: 30, fontSize: 18 }}
              lang="jsx"
              source={`const FullName = ({ firstName, lastName }) => {
    return (
      <p>{ firstName } { lastName}</p>
    );
  } `}
            />
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ marginBottom: 30 }}>
              Components
            </Heading>
            <Heading size={4} textColor="tertiary" lineHeight={1} style={{ marginBottom: 30 }}>
              Class (prefered)
            </Heading>

            <CodePane
              style={{ fontSize: 18 }}
              lang="jsx"
              source={`class FullName extends React.Component {
    render() {
      return (
        <p>{ this.props.firstName } { this.props.lastName}</p>
      );
    }
  } `}
            />
          </Slide>

          <Slide>
            <Heading size={2} textColor="tertiary" lineHeight={1} style={{ marginBottom: 30 }}>
              Props & State
            </Heading>

            <CodePane
              style={{ fontSize: 18 }}
              lang="jsx"
              source={`class FullName extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        full: false,
      };
    }

    render() {
      const { firstName, middleName, lastName } = this.props;

      const name = this.state.full
        ? \`\${firstName} \${middleName} \${lastName}\`
        : \`\${firstName} \${lastName}\`;

      return (
        <p>{name}</p>
      );
    }
  } `}
            />
          </Slide>

          <CodeSlide
            style={{ transform: 0, opacity: 1 }}
            transition={[]}
            lang="js"
            code={`import React from 'react';

  const Button = React.createClass({
    render: () => {
      return (
        <button>{this.props.children}</button>
      );
    }
  });

  export default Button;
            `}
            ranges={[
              { loc: [0, 200], title: "Lifecycle hooks" },
              { loc: [0, 1], title: "The Beginning" },
              { loc: [1, 2] },
              { loc: [1, 2], note: "Heres a note!" }
              //{ loc: [4, 7], image: shiaLabeoufMagicGif },
            ]}
          />

          <Slide>
            <Heading size={1} lineHeight={1} style={{ marginBottom: 30 }}>
              Event handling
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} lineHeight={1} style={{ marginBottom: 30 }}>
              Conditional rendering
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} lineHeight={1} style={{ marginBottom: 30 }}>
              Lists and keys
            </Heading>
          </Slide>

          <Slide notes="React.PropTypes & Flow (make reference to TypeScript)">
            <Heading size={1} lineHeight={1} style={{ marginBottom: 30 }}>
              Typechecking
            </Heading>
          </Slide>

          <Slide notes="State + props, context as fallback, global js context, Redux, MobX, ...">
            <Heading size={1} lineHeight={1} style={{ marginBottom: 30 }}>
              No data management
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={`import React from 'react';

  const Button = React.createClass({
    render: () => {
      return (
        <button>{this.props.children}</button>
      );
    }
  });

  export default Button;
            `}
            ranges={[
              { loc: [0, 12], title: "Walking through some code" },
              { loc: [0, 1], title: "The Beginning" },
              { loc: [1, 2] },
              { loc: [1, 2], note: "Heres a note!" }
              //{ loc: [4, 7], image: shiaLabeoufMagicGif },
            ]}
          />

          <Slide>
            <Heading size={1} lineHeight={1} style={{ marginBottom: 30 }}>
              React-Native
            </Heading>
            <List>
              <ListItem> Framework/Library </ListItem>
              <ListItem> jsx => xml to native views/components </ListItem>
              <ListItem> virtual dom => virtual components </ListItem>
              <ListItem> lifecycle hooks </ListItem>
              <ListItem> bridge => json data communication, event bridge </ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} >
              React-Native
            </Heading>
            <Text>
              Data fetching => fetch or xmlHttp => native fetching methods
            </Text>
            <Text>
              Data storage: temporary => component state, permanent => async storage
            </Text>
          </Slide>

          <Slide>
            <Heading size={1}>
              React-Native
            </Heading>
            <List>
              <ListItem> Platform specific </ListItem>
              <ListItem> Small differences: platform ternary (Platform.OS === 'android' ? 'android text' : 'ios text') </ListItem>
              <ListItem> Larger differences: extension based component switching </ListItem>
            </List>

            <Text>
              {`
              import Component from 'component'

              component.ios.js
              component.android.js
              (
                component.windows.js,
                ...
              )
              `}
            </Text>
          </Slide>

          {/* Spectacle boilerplate examples */}

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Spectacle Boilerplate
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              open the presentation/index.js file to get started
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary" caps>Typography</Heading>
            <Heading size={1} textColor="secondary">Heading 1</Heading>
            <Heading size={2} textColor="secondary">Heading 2</Heading>
            <Heading size={3} textColor="secondary">Heading 3</Heading>
            <Heading size={4} textColor="secondary">Heading 4</Heading>
            <Heading size={5} textColor="secondary">Heading 5</Heading>
            <Text size={6} textColor="secondary">Standard text</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>Standard List</Heading>
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>Example Quote</Quote>
              <Cite>Author</Cite>
            </BlockQuote>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
