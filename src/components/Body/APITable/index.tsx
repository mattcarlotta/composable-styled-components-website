import { compose, setDisplayName } from "composable-styled-components";
import Note from "~components/Body/Note";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";

const CustomTable = compose.table(setDisplayName("Table"))` 
  width: 100%;
  word-break: normal;
  overflow-x: auto;
  margin: 20px 0;
  border-spacing: 0;
  border-collapse: collapse;
`;

const Th = compose.th(setDisplayName("Th"))`
  color: rgba(0, 0, 0, 0.87);
  padding: 10px;
  font-weight: bold;
  line-height: 26px;
  white-space: pre;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const Td = compose.td(setDisplayName("Td"))`
  @media (max-width: 976px) {
    max-width: 125px;
    min-width: 125px;
    width: auto !important;
    overflow-x: auto;
    white-space: pre;
  }

  color: rgba(0, 0, 0, 0.87);
  padding: 10px;
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  letter-spacing: 1px;
`;

const headers = ["Property", "Usage", "Description", "Notes"];
const supportedFunctions = [
  {
    property: (
      <>
        <Link
          ariaLabel="Navigate to compose function example"
          dataTestId="compose-link"
          dark
          id="api-compose"
          nomargin
          nopadding
          href="/demonstrations#compose"
        >
          compose
        </Link>
        &nbsp;(&#8224;)
      </>
    ),
    usage: "fn.element(...fns)`\n  ...styles \n`;",
    description:
      "Composes an HTML element with composable functions and styles to create a styled-component.",
    notes: (
      <>
        The first argument to compose requires an HTML Element either declared
        as a property of compose: 'compose.div' or passed as a string to
        compose: 'compose("div")', the second argument is a list of composable
        functions separated by commas, and the third argument must be a template
        literal containing CSS properties.
        <br />
        <br />
        (&#8224;) Do <strong>not</strong> use within extend.
      </>
    )
  },
  {
    property: (
      <>
        <Link
          ariaLabel="Navigate to css function example"
          dataTestId="css-link"
          dark
          id="api-css"
          nomargin
          nopadding
          href="/demonstrations#css"
        >
          css
        </Link>
        &nbsp;(&#8224;)
      </>
    ),
    usage:
      "fn`\n  property: ${prop => 'string'};\n  property: ${prop => 'string'};\n  ...etc\n`;",
    description: "Interpolates CSS properties that require passed in props.",
    notes: (
      <>
        Accepts a template literal with interpolated functions. The
        interopolated function must be a child of a CSS property and the
        function must return a string.
        <br />
        <br />
        (&#8224;) Only to be used <strong>within</strong> withStyles.
      </>
    )
  },
  {
    property: (
      <>
        <Link
          ariaLabel="Navigate to extend function example"
          dataTestId="extend-link"
          dark
          id="api-extend"
          nomargin
          nopadding
          href="/demonstrations#extend"
        >
          extend
        </Link>
        &nbsp;(&#8224;)
      </>
    ),
    usage: "fn(...fns)(node);",
    description: "Extends a node.",
    notes: (
      <>
        First argument accepts a list of functions separated by commas and the
        second argument requires a styled-component node.
        <br />
        <br />
        (&#8224;) Do <strong>not</strong> use within compose nor nest.
      </>
    )
  },
  {
    property: (
      <>
        <Link
          ariaLabel="Navigate to nest function example"
          dataTestId="nest-link"
          dark
          id="api-nest"
          nomargin
          nopadding
          href="/demonstrations#nest"
        >
          nest
        </Link>
        &nbsp;(&#8224;)
      </>
    ),
    usage: "fn(...nodes);",
    description: "Nests nodes from left to right.",
    notes: (
      <>
        Accepts nodes (React components) separated by commas. Each node wraps
        any successive nodes to the right.
        <br />
        <br />
        (&#8224;) Do <strong>not</strong> use within compose nor extend.
      </>
    )
  },
  {
    property: (
      <Link
        ariaLabel="Navigate to Set Display Name function example"
        dataTestId="setDisplayName-link"
        dark
        id="api-setdisplayname"
        nomargin
        nopadding
        href="/demonstrations#setDisplayName"
      >
        setDisplayName
      </Link>
    ),
    usage: "fn('string');",
    description: "Sets the display name of the node.",
    notes: (
      <>
        Attributes a display name to the component when viewed within the
        'Components' tab. Requires the&nbsp;
        <OutsideLink
          data-testid="react-dev-tools"
          href="https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html"
        >
          React Dev Tools
        </OutsideLink>
        &nbsp;browser extension.
      </>
    )
  },
  {
    property: (
      <Link
        ariaLabel="Navigate to With Attributes function example"
        dataTestId="withAttributes-link"
        dark
        id="api-withattributes"
        nomargin
        nopadding
        href="/demonstrations#withAttributes"
      >
        withAttributes
      </Link>
    ),
    usage: "fn({ ...props }); \nfn(props => ({ ...props }));",
    description: (
      <>
        Creates or appends&nbsp;
        <OutsideLink
          data-testid="styled-components-attrs"
          href="https://styled-components.com/docs/faqs#when-to-use-attrs"
        >
          HTML attributes
        </OutsideLink>
        .
      </>
    ),
    notes:
      "Accepts an object of properties or a function that return properties."
  },
  {
    property: (
      <Link
        ariaLabel="Navigate to With Default Props function example"
        dataTestId="withDefaultProps-link"
        dark
        id="api-withdefaultprops"
        nomargin
        nopadding
        href="/demonstrations#withDefaultProps"
      >
        withDefaultProps
      </Link>
    ),
    usage: "fn({ ...props });",
    description: "Establishes default props.",
    notes: "Accepts an object of properties."
  },
  {
    property: (
      <Link
        ariaLabel="Navigate to With Props function example"
        dataTestId="withProps-link"
        dark
        id="api-withprops"
        nomargin
        nopadding
        href="/demonstrations#withProps"
      >
        withProps
      </Link>
    ),
    usage: "fn({ ...props }); \nfn(props => ({ ...props }));",
    description: "Creates or appends additional props.",
    notes:
      "Accepts an object of properties or a function that return properties."
  },
  {
    property: (
      <Link
        ariaLabel="Navigate to With Prop Types function example"
        dataTestId="withPropTypes-link"
        dark
        id="api-withproptypes"
        nomargin
        nopadding
        href="/demonstrations#withPropTypes"
      >
        withPropTypes
      </Link>
    ),
    usage: "fn({ ...props });",
    description: "Establishes prop types.",
    notes: (
      <>
        Requires&nbsp;
        <OutsideLink
          data-testid="prop-types"
          href="https://github.com/facebook/prop-types"
        >
          PropTypes
        </OutsideLink>
        &nbsp;package.
      </>
    )
  },
  {
    property: (
      <Link
        ariaLabel="Navigate to With Styles function example"
        dataTestId="withStyles-link"
        dark
        id="api-withstyles"
        nomargin
        nopadding
        href="/demonstrations#withStyles"
      >
        withStyles
      </Link>
    ),
    usage:
      "fn({ ...props }); \nfn(props => ({ ...props })); \nfn(css`\n  property: ${prop => 'string'};\n  property: ${prop => 'string'};\n  ...etc\n`);",
    description: "Creates or appends styles.",
    notes: (
      <>
        Accepts an object of properties, a function that returns an object of
        properties, or the&nbsp;
        <Link
          ariaLabel="Navigate to CSS helper function"
          dataTestId="css-demo-link"
          dark
          nomargin
          nopadding
          href="/demonstrations#css"
        >
          css
        </Link>
        &nbsp;helper function that interoplates CSS properties.
      </>
    )
  }
];

const APITable = () => (
  <>
    <div css="overflow-x: auto;margin-right: auto;margin-left: auto;">
      <CustomTable>
        <thead>
          <tr>
            {headers.map(head => (
              <Th key={head}>{head}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {supportedFunctions.map(
            ({ property, usage, description, notes }, index) => (
              <tr
                css={`
                  background: ${!Boolean(index % 2)
                    ? "#dcdcdc"
                    : "transparent"};
                `}
                key={index}
              >
                <Td>{property}</Td>
                <Td style={{ width: 300 }}>{usage}</Td>
                <Td style={{ width: 150 }}>{description}</Td>
                <Td>{notes}</Td>
              </tr>
            )
          )}
        </tbody>
      </CustomTable>
    </div>
    <Note>
      Any functions with a dagger (&#8224;) have special use cases, please read
      the table above for more information.
    </Note>
  </>
);

export default APITable;
