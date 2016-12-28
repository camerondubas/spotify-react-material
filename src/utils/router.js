export function handleUpdate() {
  let {
    action
  } = this.state.location;

  if (action === 'PUSH') {
    window.scrollTo(0, 0);
  }
};