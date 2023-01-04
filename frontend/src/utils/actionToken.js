export function storeToken(token,user) {
  sessionStorage.setItem(
    "auth",
    JSON.stringify({
      accessToken: token,
      user: user,
    })
  );
}

export function getToken() {
    const TokenData =  sessionStorage.getItem("auth");
    return JSON.parse(TokenData);
}

export function removeToken() {
    return sessionStorage.removeItem("auth");
}
