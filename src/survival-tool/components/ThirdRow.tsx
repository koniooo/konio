import { RowContainer } from "./RowContainer";
import { TimerButton } from "./TimerButton";
import { OneThirdColumn } from "./OneThirdColumn";
import Image from "next/image";
import PatrollerIcon from "public/survival-tool/patroller.svg";
import AbnormalIcon from "public/survival-tool/abnormal.svg";
import TeleportIcon from "public/survival-tool/teleport.svg";
import ExcitementIcon from "public/survival-tool/excitement.svg";
import BlinkIcon from "public/survival-tool/blink.svg";

import styles from "./ThirdRow.module.scss";

type Props = {
  patrollerTime: number;
  isPatrollerTimerActive: boolean;
  setIsPatrollerTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  teleportTime: number;
  isTeleportTimerActive: boolean;
  setIsTeleportTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  blinkTime: number;
  isBlinkTimerActive: boolean;
  setIsBlinkTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThirdRow = ({
  patrollerTime,
  isPatrollerTimerActive,
  setIsPatrollerTimerActive,
  teleportTime,
  isTeleportTimerActive,
  setIsTeleportTimerActive,
  blinkTime,
  isBlinkTimerActive,
  setIsBlinkTimerActive,
}: Props) => {
  return (
    <RowContainer isEdgeRow={false}>
      <OneThirdColumn>
        <TimerButton
          isTimerActive={isPatrollerTimerActive}
          setIsTimerActive={setIsPatrollerTimerActive}
          time={patrollerTime}
        >
          <p className={styles.traitTimeText}>{patrollerTime}</p>
          <div className={styles.svgContainer}>
            <div className={styles.halfContainer}>
              <Image src={PatrollerIcon} alt="patroller-icon" fill />
            </div>
            <div className={styles.halfContainer}>
              <Image src={AbnormalIcon} alt="abnormal-icon" fill />
            </div>
          </div>
        </TimerButton>
      </OneThirdColumn>
      <OneThirdColumn>
        <TimerButton
          isTimerActive={isTeleportTimerActive}
          setIsTimerActive={setIsTeleportTimerActive}
          time={teleportTime}
        >
          <p className={styles.traitTimeText}>{teleportTime}</p>
          <div className={styles.svgContainer}>
            <div className={styles.halfContainer}>
              <Image src={TeleportIcon} alt="teleport-icon" fill />
            </div>
            <div className={styles.halfContainer}>
              <Image src={ExcitementIcon} alt="excitement-icon" fill />
            </div>
          </div>
        </TimerButton>
      </OneThirdColumn>
      <OneThirdColumn>
        <TimerButton
          isTimerActive={isBlinkTimerActive}
          setIsTimerActive={setIsBlinkTimerActive}
          time={blinkTime}
        >
          <p className={styles.traitTimeText}>{blinkTime}</p>
          <div className={styles.svgContainer}>
            <Image src={BlinkIcon} alt="blink-icon" fill />
          </div>
        </TimerButton>
      </OneThirdColumn>
    </RowContainer>
  );
};
