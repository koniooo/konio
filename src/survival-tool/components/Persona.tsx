import styles from "./Persona.module.scss";
import { PersonaButton } from "./PersonaButton";
import { accelerateDecodingTime } from "./Main";
import { trumpCardTime } from "./TrumpCardButton";

const presenceUnit = 250;
const maxPresence = 1000;
const insolenceSwitchTime = 22;
const insolenceStandardTime = 30;
const insolenceEndTime = insolenceSwitchTime + insolenceStandardTime * 3;

type Props = {
  elapsedTime: number;
  isStartTimerActive: boolean;
  hasConfinedSpace: boolean;
  setHasConfinedSpace: React.Dispatch<React.SetStateAction<boolean>>;
  hasWantedOrder: boolean;
  setHasWantedOrder: React.Dispatch<React.SetStateAction<boolean>>;
  hasInsolence: boolean;
  setHasInsolence: React.Dispatch<React.SetStateAction<boolean>>;
  hasDetention: boolean;
  setHasDetention: React.Dispatch<React.SetStateAction<boolean>>;
  hasTrumpCard: boolean;
  setHasTrumpCard: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Persona = ({
  elapsedTime,
  isStartTimerActive,
  hasConfinedSpace,
  setHasConfinedSpace,
  hasWantedOrder,
  setHasWantedOrder,
  hasInsolence,
  setHasInsolence,
  hasDetention,
  setHasDetention,
  hasTrumpCard,
  setHasTrumpCard,
}: Props) => {
  const isInsolenceTimerActive =
    isStartTimerActive && 0 <= elapsedTime && elapsedTime <= insolenceEndTime;

  const isTrumpCardTimerActive =
    isStartTimerActive && 0 <= elapsedTime && elapsedTime < trumpCardTime;

  const isDetentionTimerActive =
    isStartTimerActive && elapsedTime >= accelerateDecodingTime;

  let insolenceValue: number;
  if (elapsedTime <= 0) {
    insolenceValue = 0;
  } else if (elapsedTime <= insolenceSwitchTime) {
    insolenceValue = (presenceUnit / insolenceSwitchTime) * elapsedTime;
  } else if (elapsedTime <= insolenceEndTime) {
    insolenceValue =
      presenceUnit +
      (presenceUnit / insolenceStandardTime) *
        (elapsedTime - insolenceSwitchTime);
  } else {
    insolenceValue = maxPresence;
  }

  let insolenceMeter: string;
  if (insolenceValue < presenceUnit) {
    insolenceMeter = "○○○○";
  } else if (insolenceValue < presenceUnit * 2) {
    insolenceMeter = "●○○○";
  } else if (insolenceValue < presenceUnit * 3) {
    insolenceMeter = "●●○○";
  } else if (insolenceValue < presenceUnit * 4) {
    insolenceMeter = "●●●○";
  } else {
    insolenceMeter = "●●●●";
  }

  return (
    <section className={styles.persona}>
      <div className={`${styles.vertical} ${styles.top}`}>
        <div className={styles.confinedSpace}>
          <PersonaButton
            hasPersona={hasConfinedSpace}
            setHasPersona={setHasConfinedSpace}
            isPersonaTimerActive={false}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 101.6 93.5"
              fill="#292b2f"
            >
              <path d="M91.5 60.5 93.3 50c0-.3.5-.6.8-1l.6 1.2c1 1.6 2.2 3 3.3 4.6.3-.3.9-.7.9-1-.4-3.3-1-6.6-1.1-10 0-4.5-2.2-8-4.9-11.2-3.3-4-7.3-7.5-10.8-11.3-.6-.7-.3-2.3-.3-3.5l.3-2c.5.4 1.1.7 1.6 1.2 3.3 3.6 6.5 7.4 9.9 11 .2.2 1.6-.5 2.4-1 .5-.3 1-.8 1.4-1.3.3.7 1 1.3 1 2 .2 1.9 0 3.8.3 5.8 0 .7.9 1.3 1.3 2 .6.9 1.6 1.8 1.6 2.6-.1 3.2-.6 6.3-.8 9.5-.2 3.8.5 7.8-.5 11.4a47.3 47.3 0 0 1-6.2 14c-2.9 4.3-7 7.9-11 11.3-2.4 2-5.5 3.4-8.5 4.8-8.6 4-17.8 5-27.2 4.3a43 43 0 0 1-15.3-3.5c-2.4-1.2-2.2-2.5-2.4-4.3-.2-1.3-1-2.4-1.5-3.6-.2-.5-.2-1-.2-1.5 0-2.5.4-5-.1-7.5-.3-1.5-2.2-2.6-3.3-4-.4-.6-.8-2-.5-2.3 2-2.5 4.2-4.9 6.5-7.2.3-.3 1.2-.2 1.7 0l5.2 2.7 5.5 3c.2.1.3.8.2 1l-8.4 9.2a80.3 80.3 0 0 0-4.6 5.7c-.7 1-.6 1.8 1 2.4a53.5 53.5 0 0 0 23 2.8c1.7 0 3.5-.8 5.2-1.3.3-.1.7-.5.8-.9l3-10.2.7-.6c.2 0 .6.2.7.4 1 2.4 1.9 4.9 3 7.2.3.7 1.4 1 2 1.4.3-.4.7-.9.9-1.4l2.8-12.6.6-1 .8.7 6 8.5.6.6c.2-.4.4-.7.4-1L83.5 62c0-.5.3-1 .5-1.6.6.5 1.5.7 1.9 1.3 1.2 2 2.2 4.3 3.4 6.3.3.5 1.2.7 1.8.7.2 0 .7-.9.7-1.3v-7h-.3z" />
              <path d="m48.9 17.8 15 6.5 13.7 6 6.5 3c.2.1.3.5.4.7-.3.2-.6.5-.9.5-5.5-1-7.4 3.6-10.2 6.7-1.8 2-3.5 4.3-5.2 6.5l-.6 1c-1.6 2.4-2.9 5-4.8 7-2.7 2.6-5.8.3-8.5-.3-4-1-8-2.2-11.6-4-6-3-11.7-6.5-17.5-9.9-2.1-1.2-4-2.8-6-4.3-1-.8-1.7-1.4-.3-2.7l14.3-14.2c3-3 6.3-5.7 11.2-3.7 1.2.5 2.6.5 4 .8.2 0 .3.2.5.4-.2 0-.4.1 0 0zm-6.4 6.6c-1.1 1-2.5 2.1-3.6 3.4-.9 1-2.6 2.1-.8 3.4 1.3 1 3 1.2 4.4 1.8.6.2 1.6.5 1.6.8 0 .7-.4 1.4-.7 2-.8 1.5-2.5 3.8-2.1 4.2 1.4 1.4 3.4 2.3 5.3 3.4l.5-.3c1.1-1.5 2.4-2.8 3.2-4.4.9-1.6 2-1.5 3.2-1 1.8.8 3.6 1.7 5.4 2.3.5.2 1.2 0 1.6-.4 1.3-1.3 2.6-2.6 3.7-4.1.4-.5.3-1.9-.1-2.1-1-.8-2.4-1.4-3.7-1.8-2.2-.7-2.7-1.7-1-3.3 1.4-1.4 1.2-2.5-.4-3.4-1.2-.8-2.5-1.4-3.9-1.8-.5-.2-1.4 0-1.8.3-1 .8-1.7 2-2.7 2.9-.6.4-1.7.7-2.5.4-1.8-.5-3.5-1.4-5.6-2.3z" />
              <path d="M2.8 26.6V18c0-.3.3-.7.5-1l.5.9 3.6 6.5c.1.2.4.3.7.5l.2-.7.2-2.2L9.7 11c0-.4.4-.8.7-1.1l.8 1 4.4 7.2c.1.1 1.3-.1 1.4-.4.6-2 1-4.2 1.5-6.4L20 3.2c0-.2.4-.6.4-.5.3.1.7.3.8.6l4.4 7.5c.2.4 1 .8 1.3.7.6 0 1.4-.5 1.5-1L31.3 2c.4-.9.8-1.6 1.7-.1.9 1.6 1.9 3.3 3.3 4.3 1 .7 3.4.8 4.3 0C42 5 42.7 3 43.7 1.3c.8-1.3 1.8-2 2.5-.2 2 5 6.3 5.6 10.8 6.2 4.2.6 8.2 1.9 12.3 3 3 1 3.3 2.5 1.4 4.4-.3.3-1.4-.1-2.2-.3-2-.5-4-1.3-6.1-1.5-5.2-.6-10.4-1.5-15.6-1.3-4.9.3-9.8 1.8-14.6 3a24 24 0 0 0-7 2.8c-5.2 3.4-10.5 6.7-14 12.1-.5 1-1.2 1.8-1.9 2.6-.1.2-.5.3-.6.2-.2 0-.5-.4-.4-.6L9 29l.2-1.8-.9 1.2a27 27 0 0 0-4.2 16.8l.2 1c.3-.2.6-.5.9-.5.5.1 1.4.3 1.5.6.2.8.2 1.8 0 2.6-.7 8.7 2.2 16 8 22.4l2 2.3c.1 0 .2.4.1.5-1.1 1.4-1.6 2.8-.3 4.3l-.7.4c-.5 0-1.2 0-1.4-.2-3.2-4.4-6.8-8.6-9.3-13.4A34 34 0 0 1 1 49.2c.1-4.3-.6-8.6-.9-13 0-.6.3-1.3.4-2l1 1.1c.2.2.7.3.7.2.2-.2.4-.5.4-.8v-8.1h.3z" />
              <path d="M86.1 42c0 .7.2 1.6 0 2.4-.4 1.6-.7 3.3-1.5 4.7a64.5 64.5 0 0 1-5.2 8c-2.5 3.3-5.7 6-8 9.5-2 3-5 3.6-8 4.6-.6.2-1.6-.3-2.4-.7-4.8-2-9.6-3.8-14.3-6-6.5-3-13-6.5-19.4-9.6-2.6-1.2-5.7-2-6.5-5-.7-3-.7-6-1-9 0 0 1-.4 1.2-.2l14.8 9.1c4.7 2.9 9.6 5 15 6.4 2.8.6 5.5 2 8.4 2.8 3.6 1 4.8-2.1 6.5-4.1L76 41.7l1-.5c0 .5 0 1.2-.2 1.4-3.5 2.9-5.4 7-8 10.5-1.4 2-3 4-4 6-.6 1-.3 2.4-.4 3.6l-.1 4.6c0 .5.4 1.3.8 1.4.6.1 1.6 0 2-.3 2.7-2.5 5.5-5 8-7.7 1.9-2.2 3.4-4.8 5-7.2 1.5-2 3.6-3.7 4.2-5.9.6-2.5 0-5.5 0-8.2-.1-1-.7-2-.8-3.1 0-.4.7-1.2.9-1.1.5.1 1.4.6 1.4 1 .2 1.9.1 3.8.1 5.7h.1zM78.5 15.7l2 6v.8c0 2.5-4.9 5.5-7.2 4.5l-3.6-1.5c-1.5-.8-3-1.8-4.4-2.7-.2-.1-.2-.7-.1-.8l3.8-4.4c.4-.3 1-.5 1.6-.5 1.9 0 2.6-1 2.6-2.7v-3.6c.1-1.2 0-2.6 2-2.5 1.9 0 3.4.7 3.8 2.7.3 1.5 0 3 0 4.5l-.5.2zM25.8 79.7v4c-.3 2.4.2 4.4 2.6 5.6.3.1.4 1 .3 1.3-.1.2-1 .5-1.2.3a420 420 0 0 1-12.8-8c-.4-.2-.3-1.4-.4-2.1l1.4.8c.5.1 1.2.4 1.5.2.5-.4 1-1 1-1.6.3-2.7.3-5.4.3-8.1.1-2.6 1.8-3.5 4.1-2.3 2.3 1.1 3.5 2.6 3.2 5.3-.2 1.5 0 3 0 4.6zM22 72.3c-1 1.4-2 2.2-1.8 2.7.2.9 1 1.6 1.6 2.3.7-.5 1.8-1.1 1.9-1.8 0-.7-.8-1.6-1.7-3.2z" />
            </svg>
          </PersonaButton>
        </div>
        <div className={styles.wantedOrder}>
          <PersonaButton
            hasPersona={hasWantedOrder}
            setHasPersona={setHasWantedOrder}
            isPersonaTimerActive={false}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 88.5 73"
              fill="#292b2f"
            >
              <path d="M9.6 20.6c-1.4-.5-2.8-.8-4.2-1.4-.5-.1-.7-.7-1-1 .3-.4.7-.7 1.2-1l7.1-3.4c4.4-2 8.8-3.7 13.1-5.6 5.6-2.5 11.1-5 16.6-7.7 1.4-.7 2.3-.9 2.8.9l.6 1.9c.5 1.4.1 2-1.5 2.5a49.4 49.4 0 0 0-9.4 4.6c1-.3 2.1-.4 3.1-.8A273 273 0 0 0 46 7c1.3-.4 2-.4 2.6 1 1.6 4.3 3.6 8.5 5.2 12.7.2.5-.6 1.9-1 2-8.6 1-17.2 2.3-25.8 2.6-4.6.2-9.3-1.5-14-2.4-.5-.1-1.1-.3-1.8-.1 4.2 1.3 8.4 2.5 12.5 4 3.4 1.2 6.6 2.8 10 4C37.4 32 41.3 33 45 34.3c3.3 1 6.5 3 10 3.3 4.7.4 9.6-.4 14.5-.7.2 0 .5-.2.6-.5 3.7-6.1 8-4.8 12.3-1.6 3.7 2.6 6.4 6.2 6 11.2-.3 3.4-3.1 5.2-6.2 3.9-.5-.2-1.3.3-2 .3-1 .1-2 .4-2.9 0-.8-.4-2.3-1.1-.8-2.6.1-.1-.2-.8-.4-1-3.7-3.8-8.3-5-13.3-5.5-3-.3-5.5.4-7.7 2.4-2.7 2.4-5.2 2.6-9 1.3-13-4.8-24-13-36-19.4l-3.8-2.2h-1c.3.4.3 1 .6 1.2 4 3.3 8 6.7 12 9.8 6.3 4.9 12.7 9.6 19.2 14.4 1.2.9 2.6 1.5 4 2.3.3.2.8.7.7 1-.1.3-.6.8-1 .8-5.7 1-10.6 3.8-15.3 7-1.4 1-2 .7-2.7-.7a1592 1592 0 0 0-12.7-24.4C8.3 31 6 27.8 4.2 24.2c-1-2-1.7-4.3-4-5.4l-.2-.6h1L9.3 21l.2-.4zm70 23.4c2.7 0 4.6-1.7 4.2-3.6-.6-2.8-4.2-5.7-7-5.5-1.8.2-3.6 1-3.6 3-.1 3.2 3.2 6.1 6.4 6zm-32.2-8.4c-2.7 0-4.2 1.4-4.2 3.2 0 1.6 2.3 3.6 4 3.6 1.4 0 3.6-2 3-3.3-.6-1.5-2-2.6-2.8-3.5z" />
              <path d="M72.9 73c-7.6.4-12.7-4.8-15-11.5-1-2.9-1-6-1.7-9-.2-.7-1-1.5-1.6-1.7-1-.2-2.2 0-3.4 0C49 51 45.6 49 45 47c0 0 .2-.5.4-.5.3 0 .5.2.8.4 2.7 1.6 5.3 1.9 8-.4 1.2-1.1 7.2-.3 8.5 1L77.8 63l.3.3c1.5 1.9 3.5 4 2.3 6.3-1.2 2.3-3.8 3.2-6.5 3.3h-1zM70 70.3l2.5-.3c3-.8 3.5-1.8 1.6-4.4-1.1-1.7-2.3-3.3-3.6-5-2.6-3.3-5.3-6.6-8.1-9.8-1.2-1.4-2.4-1.3-3 .8-1.7 6 1.4 13.9 7.1 17.4 1.2.7 2.6 1 3.5 1.3zM4.5 29v-1.7c0-.3.2-.5.3-.8l.5.6 5.1 11.5L16 50.5l5 11.4c.1.3-.2 1.3-.5 1.4-3 1-6 2-9.2 2.7-.3 0-1.2-1-1.3-1.5L7 45.2 5 31.7l-.5-2.6zM34.5 27.5c.9 0 1.7.2 2.5.1 4.6-.7 7.8 1.4 10.4 5l.4.8h-1l-5.2-2c-2-.5-4-.9-5.9-1.6-.8-.3-1.5-1.1-2-1.9-.3-.2 0-.8 0-1.2l.8.8zM19.6 9.3c-.5-.3-1-.4-1.2-.8-1.5-2-3-4-4.3-6-.2-.3-.1-.9-.2-1.4.4.2.8.3 1.1.6 2 1.6 3.8 3.2 5.6 5 .4.3.9 1.2.7 1.6-.3.5-1 .7-1.7 1zM46.4 36.9l2 2.5c-.6.3-1.2 1-1.6.9-.7-.3-1.3-1-2-1.5l1.6-2z" />
            </svg>
          </PersonaButton>
        </div>
      </div>
      <div className={styles.flexContainer}>
        <div className={`${styles.horizontal} ${styles.left}`}>
          <PersonaButton
            hasPersona={hasInsolence}
            setHasPersona={setHasInsolence}
            isPersonaTimerActive={isInsolenceTimerActive}
          >
            {isInsolenceTimerActive && (
              <p>
                {Math.round(insolenceValue)}
                <br />
                <span>{insolenceMeter}</span>
              </p>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 108.8 102.4"
              fill="#292b2f"
            >
              <path d="m87.2 44.5.2-1.3.1.3c.6 5 1 10.1 2 15.1.4 1.8 2 3.3 3.3 4.8a36 36 0 0 0 4.1 4.3c1.2 1 2.7 1.8 4 2.6.3.2.6.2.8 0l6.4-2 .7.4c-.3.7-.5 1.6-1 2.2-2 2.1-3.8 4.2-5.9 6.2-.6.6-1.6 1-2.5 1.3l-7.9 3.9-6.8 3.3c-2.8 1.3-5.7 2.3-8.5 3.7a76.5 76.5 0 0 0-7.7 4.2c-1.8 1.1-3.8 1.2-6.2-.3-.4-.3-1.1-.2-1.7-.3 0 .6 0 1.5.3 2 1.3 1.2 1.1 2.1 0 3.6-2 2-4.6 2.5-6.8 3.8-.4.3-1.7-.3-2-.8A47 47 0 0 0 41 90.9a8.7 8.7 0 0 1-3.5-6c-.5-2.9-.7-6-1.9-8.7-1.7-3.8-1.4-7.9-2.4-11.7-.8-2.6-1-5.3-1.8-8-.2-.7-.8-1.4-1.4-2.1-2.5-3.4-5.2-6.6-7.6-10.1-2-2.8-3.5-5.9-5.3-8.8l-3.8-5.6c-.1-.2.2-.9.5-1 1-.8 2-1.4 3.1-2 .2-.1 0-.5 0-.8-.9.1-2 0-2.6.5-1.4 1-2.3 1-3.1-.6-.6-1-1.3-2-2.1-2.9-.7-.8-.5-2 .8-2.5 3-1.2 5.8-3 9.2-3.6 2.4-.4 4.6-1.7 6.8-2.6 5-2 9.8-4.1 14.8-6 4.8-2 9.6-3.7 14.4-5.5L61.5.6c3.3-1.2 2.9-.6 4.4 2 1.4 2.2 2.6 4.6 3.8 7l.8 1.8 2.3 4.5.4.9c.4 3.7 3 6.5 4.6 9.7.9 2 2.5 3.4 3.8 5.1.5.7.7 1.5 1.1 2.1.8 1.2 2 2.3 2.5 3.6.8 2.4 1.3 4.9 2 7.2zm-9-4.4-.3-1.7c-.2-3.3-1.2-6.2-3.6-8.5a5.8 5.8 0 0 0-2.4-1.4c-1.3-.4-2 .7-1.5 2 1 2.1 2 4.3 2 6.8l.2.7c1 2 .8 4 .1 5.9-.7 2-1.1 4.2-2.2 6.3-2.3 4.7-6.7 5.9-10.8 7.5-1.3.5-2.7.5-4 .7-1 0-1.9.2-2.7 0-2-.5-4.2-1-6.1-1.9-3-1.4-6.2-2.8-8.7-5-2.2-2-3.5-5-5-7.6-.7-1-1.3-2.1-1.4-3.3-.3-2.4-.3-4.9-.4-7.3a16 16 0 0 1 2-8.5c1-2 2.6-4 4.2-5.7 2.4-2.7 5.3-5 9.1-5.1 4 0 8 .2 12 .4.5 0 .8.4 1.2.6l1.6.6c-.2-.5-.2-1.3-.6-1.5-1.6-.9-3.2-2-5-2.4-7-1.6-13.8-.8-19.4 4.3a27.6 27.6 0 0 0-6.1 7.2c-1.5 3-2.4 6.4-2.8 9.8-1.1 7.8 1.6 14.6 6.5 20.5 2.4 2.8 4.6 5.7 8 7.3 3 1.4 6 2.9 9 4 4.3 1.4 8.6-.3 12.9-.4v-.2l-1-.2a19.6 19.6 0 0 0 15.2-16.8l.2 1.6h.4v-10h-.4l-.2 1.3zM61.4 53.3c.8-.3 1.8-.4 2.3-1 1-1.3 1.8-2.7 2.4-4.1.7-2 .8-4 .4-6-.6-2.5-.4-5.1-1.4-7.6-.8-1.8-1.4-3.5-2.8-4.9-.5-.5-1.3-.8-1.5-1.4-.7-1.7-2-1.4-3-.9-1.3.8-2.2 2.2-3.4 3.2-.2.2-.6.2-.9.2-1 0-2-.2-2.8 0-.6.3-1 1.2-1.3 1.8-.6 1.4-1 2.8-1.7 4.2-.2.5-.7 1-1 1.5-.2.6-.7 1.4-.5 1.9 1.3 2.8 1.8 6 4.2 8.3 1.3 1.2 2.6 2.6 4.1 3.3 2.1.8 4.5 1 7 1.5zm-16.8-15h-.1c0-1.3.1-2.5.3-3.7 0-.4.3-.7.5-1l.8.6c.2.2.6.2.8.3.4-1.5 1-3 1-4.4 0-1 .2-1.3 1-1.3l4.2-.1c.6 0 1.3-.4 1.5-.8.5-1.4 1.5-2 2.8-2 2.6 0 5.1.3 6.2 3.2.1.3.4.4.6.6.1-.2.4-.5.3-.7-.1-1.3-.4-2.5-.6-3.8-.3-1.9-2-2.6-3.3-3.8-3-3-7-3.7-10.7-1.7L44.8 22c-1.4.7-2.9 1.4-4 2.5-.7.8-.5 2.4-1.2 3.4-1.3 2-.8 4-.4 5.9.2 1.2.7 2.4 1.1 3.5.9 2.7 2.4 4.8 4.8 6.2h1l-.5-1.3c-.3-.5-.8-.8-1-1.3v-2.7zM77 70.7a266.7 266.7 0 0 0 6.3-4.8c.2-.2.3-.7.2-.8-.2-.2-.6-.4-1-.4-2 0-3 1.5-4.3 2.5-.8.6-1.6 1.4-2.4 1.5-2.3.2-4.3.6-6.3 1.9-1.8 1-4 1.5-6 2.5-3 1.7-6 3.7-9.2 5.4-1.8 1-3.9 1.7-5.8 2.6l-.5.5.4.4 3.4-1c.5-.1.8-.5 1.3-.7 1.5-.6 3-1 4.5-1.8 2-1 4-2 5.7-3.2 2.5-1.8 5.2-2.7 8-3.6.4 0 .6-.4 1-.5.7-.3 1.5-.7 2.2-.8l2.5.3zm-21 18.5 1.5-.7c.8-.7 1.5-1.5 2.4-2.1l5-2.9 2.8-1.4c1.2-.6 2.5-1.1 3.7-1.8l2-1.3 3.7-3 .1-.8c-.2.1-.5.1-.7.3-1.1.7-2 1.8-3.3 2.3l-14.7 6.1-1.6.8c-1 .5-2.1 1.1-3.2 1.5-.9.4-1.2.9-.4 1.5.8.6 1.7 1 2.6 1.5zm35.8-20.8L88.9 70l-3.7 2.3-1.8 1.1c-.2.2-.3.7-.4 1 0 0 .4.4.5.3a5 5 0 0 0 1.3-.6l1-.8 6.5-2.6c.4-.2.6-.8 1-1.2l-1.6-1z" />
              <path d="M6.1 32.5 8.3 35l9.9 10.8 10.5 11.4c.6.7 1 1.6 1.2 2.5.7 3.3 1.1 6.7 1.8 10 .2 1.2.9 2.2 1.1 3.3l1.2 6.3c.1.5-.1 1-.2 1.4-.6-.4-1.5-.7-1.8-1.2L24.9 67c-1.3-2.2-2.2-4.7-3.8-6.7-2.1-2.7-3.1-6.1-6.3-8.3-2.4-1.7-4.1-4.5-6.2-6.8l-2-2.3-2.4-2.5L2 38.9c-.6-.6-1.3-1-1.8-1.6-.2-.3-.3-1-.1-1.1l6-3.7z" />
              <path d="M18.4 59.4c-1.5-1.1-2.7-2-4-2.7l-1-.7L1 49.3c-1-.5-1.2-1-.2-2 3.2-3.2 2.7-2.6 5.8-.3 3.6 2.9 7 6.2 10.4 9.3.6.6.8 1.7 1.4 3z" />
            </svg>
          </PersonaButton>
        </div>
        <div className={`${styles.horizontal} ${styles.right}`}>
          <PersonaButton
            hasPersona={hasTrumpCard}
            setHasPersona={setHasTrumpCard}
            isPersonaTimerActive={isTrumpCardTimerActive}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 82.84445 68.33504"
              fill="#292b2f"
            >
              <path d="M34.11587.06063c3.89676.08284,4.54862.42648,5.514,4.177,1.578,6.13032,9.0601,40.44132,9.62647,42.86169.98856,4.22467.32631,6.12392-3.302,8.63813-4.497,3.1161-15.58022,10.69628-16.57732,11.44-2.5999,1.93922-4.51442,1.45083-5.94071-1.53142C22.40313,63.48573,11.13706,11.26055,10.08271,6.0224,9.38733,2.56764,11.08346.5212,14.67745.42822,18.04187.34116,31.004-.00552,34.11587.06063Z" />
              <path d="M67.90147,4.90388c-.00635.297-5.34145,25.646-5.4294,25.98476-1.07578,4.14425-2.67724,4.66054-5.86647,1.79489-2.127-1.91117-4.63056-3.35536-6.585-5.48034C48.869,25.951,48.058,24.7136,48.55133,22.87615c1.60476-5.9768,4.553-19.52289,4.68354-20.25323C53.62614.43305,55.06764-.129,57.05339.02338c2.35418.18071,4.714.28828,7.06784.47293C67.22191.73955,67.97508,1.46233,67.90147,4.90388Z" />
              <path d="M53.99623,50.87992c-1.7282-.0576-2.18382-1.0311-1.429-2.51768,1.80542-3.55568,3.54037-7.15544,5.53411-10.60417,1.28224-2.218,2.21864-2.306,3.88985-.313,1.16017,1.38355,2.1138,1.07505,3.16559.31922,4.9672-3.56944,9.75533-7.24156,12.70941-12.9069A17.16727,17.16727,0,0,0,79.53162,14.3648c-.41166-3.26-1.28256-4.00378-4.70306-4.80133a4.0989,4.0989,0,0,1-1.07085-.32427c-.95384-.53324-3.0954-.18672-2.86948-.959.46639-1.59432,2.34585-.82034,3.55036-.6344,4.239.65439,6.8834,3.10039,7.9,7.37133a21.14809,21.14809,0,0,1-.79607,11.77324,38.53849,38.53849,0,0,1-11.23271,16.9168c-1.65843,1.47537-4.07909,2.72181-2.09908,5.73793.54617.832-.49256,1.57072-1.49268,1.59106C64.59844,51.07932,56.11418,50.95052,53.99623,50.87992Z" />
              <path d="M0,50.51831a12.44238,12.44238,0,0,1,.62681-4.79043c.43677-1.0585,1.66-1.57039.14855-3.28039-1.52039-1.72009.43317-2.719,1.96193-3.13645,3.23321-.88284,6.52892-1.55111,9.72871-2.53591,1.60314-.49341,1.75947.11518,1.60955,1.35666-.269,2.22725-.53056,4.45619-.85456,6.67575-.2602,1.78248-1.3882,5.15224-3.09641,3.272-.83776-.92209-1.43876.78893-1.52855,1.74109a7.39482,7.39482,0,0,0,2.144,6.49965,11.91424,11.91424,0,0,0,7.9795,3.593c.47976.0133,1.0898.09719,1.121.70033.03367.65192-.6103.6944-1.07513.749A22.86125,22.86125,0,0,1,3.10329,57.68408C.53285,55.98873.04211,54.42142,0,50.51831Z" />
            </svg>
          </PersonaButton>
        </div>
      </div>
      <div className={`${styles.vertical} ${styles.bottom}`}>
        <PersonaButton
          hasPersona={hasDetention}
          setHasPersona={setHasDetention}
          isPersonaTimerActive={isDetentionTimerActive}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 78.01185 65.497"
            fill="#292b2f"
          >
            <path d="M77.95318,53.84157a16.76633,16.76633,0,0,1-2.13034,7.74983c-1.56184,2.93552-6.12706,4.6218-9.33562,3.61131-3.62038-1.14018-6.08291-3.77594-8.17319-6.72287-1.99463-2.81209-3.43247-6.0342-6.40113-8.08217-.3436-.237-.71853-.79607-.10372-1.2221a1.05046,1.05046,0,0,1,1.34865.17625,21.59988,21.59988,0,0,1,4.72569,5.67442,23.5771,23.5771,0,0,0,5.81611,7.13187,7.51355,7.51355,0,0,0,6.18609,1.83579c.46866-.07541,1.068-.16076,1.07123-.78289a1.0624,1.0624,0,0,0-.56183-.82388c-4.70765-1.31711-6.68577-5.2493-8.65015-9.11651-1.40831-2.77248-3.71567-4.604-6.07221-6.41018A13.25453,13.25453,0,0,1,51.89964,30.853c.75451-1.4671,1.495-1.5882,2.36319-.2359a27.75762,27.75762,0,0,0,7.332,7.22364,73.699,73.699,0,0,1,6.54533,5.455A25.86733,25.86733,0,0,0,74.672,48.11712,5.16046,5.16046,0,0,1,77.95318,53.84157ZM59.24773,41.26476a1.89535,1.89535,0,0,0-2.09131-1.57528,1.49209,1.49209,0,0,0-1.42389,1.75018c.08258,1.21159.89263,1.65355,2.00146,1.52107A1.54183,1.54183,0,0,0,59.24773,41.26476Zm10.33977,9.433c-.8766.16309-1.623.679-1.52982,1.62909a1.97444,1.97444,0,0,0,1.944,1.80088c.91778.06024,1.21574-.68956,1.25352-1.4292A1.737,1.737,0,0,0,69.5875,50.6978Z" />
            <path d="M16.93381.10356A5.31429,5.31429,0,0,1,20.978.832c3.132,1.84724,6.21679,3.95143,7.39227,7.51366,2.54926,7.72547,8.72325,12.04206,14.78925,16.51987a47.8936,47.8936,0,0,0,5.2053,3.54936c1.66961.92,1.75173,2.04833,1.3557,3.69057-1.15737,4.79926-1.2088,9.56588,1.04175,14.1243a2.83713,2.83713,0,0,1,.14628,2.49574c-1.53894,3.64527-3.04294,7.30661-4.664,10.91523-.62278,1.38639-1.40539,1.466-2.06144.246-3.284-6.10688-8.84121-9.93312-14.04685-14.09723-2.11927-1.69523-4.40077-3.19721-6.675-4.68535a20.46714,20.46714,0,0,0-4.22019-2.27679C11.76915,36.1684,6.02512,31.24724.90608,25.374a2.89721,2.89721,0,0,1-.49125-3.62058C2.52949,16.87781,4.688,12.01166,6.53819,7.03346,8.53171,1.66956,13.31963,1.12973,16.93381.10356ZM13.48216,3.59869a.52066.52066,0,0,0-.73534-.49744c-1.455.40443-2.82425.93974-3.51624,2.46331-1.482,3.26289-2.9859,6.51581-4.476,9.775a.8551.8551,0,0,0,.05131,1.03149,7.29412,7.29412,0,0,0,.69991-.76943Q9.37,9.95155,13.20943,4.28454A3.25155,3.25155,0,0,0,13.48216,3.59869Zm8.613,10.72676a3.14084,3.14084,0,0,0-2.63329-3.12823c-1.33547-.03119-1.59722.86534-1.54344,1.94091.07354,1.47077,1.43667,3.14187,2.5869,3.08269C21.72736,16.15793,22.07929,15.27653,22.09513,14.32545Zm3.327-.539a5.04029,5.04029,0,0,0-3.99892-4.77613,1.25045,1.25045,0,0,0-.95669.38365c-.28648.35942.06724.64514.39615.78816A4.07908,4.07908,0,0,1,23.508,14.838c-.06569.51792-.09222,1.08331.43132,1.20892.74551.17887,1.02295-.51116,1.23264-1.06652A6.34082,6.34082,0,0,0,25.42209,13.78641Z" />
          </svg>
        </PersonaButton>
      </div>
    </section>
  );
};
