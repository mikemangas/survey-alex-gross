export function useHandleButtonClick(nextAction) {
  if (nextAction) {
    console.log('NEXT');
  } else {
    console.log('PREVIOUS');
  }
}
