// Type Aliases

type stringOrNumber = string | number;

//! error interface is not for aliases
//! think of it for defining objects and classes types
// interface stringOrNumber = string | number

// type Guitarist = {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// };

/* 
type Guitarist = {
  name: string;
  active?: boolean;
  albums: stringOrNumber[]; // * we used our alias type
};
 */

/* 
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name: string;
  active?: boolean;
  albums: stringOrNumberArray; // * we made more abstract alias
};
 */

type stringOrNumberArray = stringOrNumber[]; //* used alias inside another alias

type Guitarist = {
  name: string;
  active?: boolean;
  albums: stringOrNumberArray; //* we uses composed alias
};
