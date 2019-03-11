import styled from 'styled-components';

import { theme } from '../../helpers/theme';

const CloseButton = styled.TouchableHighlight`
  margin-left: ${ theme.spacings.defaultSpacing };
`;

const SignInButton = styled.TouchableHighlight`
  margin-right: ${ theme.spacings.defaultSpacing };
`;

const SignInButtonText = styled.Text`
  color: #fff;
  font-size: 18;
  font-weight: 400;
`;

// const Logo = styled.Image`
//   height: 30%;
//   marginBottom: 40px;
// `;

// const Input = styled.TextInput`
//   paddingHorizontal: 20px;
//   paddingVertical: 15px;
//   borderRadius: ${theme.borders.defaultBorderRadius};
//   backgroundColor: #FFF;
//   alignSelf: stretch;
//   marginBottom: 15px;
//   marginHorizontal: 20px;
//   fontSize: 16px;
// `;

// const ErrorMessage = styled.Text`
//   textAlign: center;
//   color: #ce2029;
//   fontSize: 16px;
//   marginBottom: 15px;
//   marginHorizontal: 20px;
// `;

// const Button = styled.TouchableHighlight`
//   padding: 20px;
//   borderRadius: ${theme.borders.defaultBorderRadius};
//   backgroundColor: #FC6663;
//   alignSelf: stretch;
//   margin: 15px;
//   marginHorizontal: 20px;
// `;

// const ButtonText = styled.Text`
//   color: #FFF;
//   fontWeight: bold;
//   fontSize: 16px;
//   textAlign: center;
// `;

// const SignUpLink = styled.TouchableHighlight`
//   padding: 10px;
//   marginTop: 20px;
// `;

// const SignUpLinkText = styled.Text`
//   color: #999;
//   fontWeight: bold;
//   fontSize: 16px;
//   textAlign: center;
// `;

export { 
  CloseButton,
  SignInButton,
  SignInButtonText
};