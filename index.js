export const wrapAct = (fn) => {
  if (typeof act !== 'function') {
    return fn();
  }
  let returnVal;
  TestUtils.act(() => {
    returnVal = fn();
  });
  return returnVal;
};

export const wrapAsyncMount = async Component => {
  await act(async () => {
    await Promise.resolve(Component);
    await new Promise(resolve => setImmediate(resolve));
    Component.update();
  });
  return Component;
};
