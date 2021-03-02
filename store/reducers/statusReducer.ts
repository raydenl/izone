import { Switch } from 'react-native-gesture-handler';
import {
  STATUS_START,
  STATUS_FAILURE,
  STATUS_SUCCESS,
} from '../actions/statusActions';
import { switchCase } from '../utils/commonUtils';

export enum Mode {
  Cool,
  Heat,
  Vent,
  Dry,
  Auto,
}

export enum Fan {
  Low,
  Medium,
  High,
  Auto,
}

export enum AirflowLock {
  MinLocked,
  MinMaxLocked,
  Off,
}

export enum FreeAir {
  On,
  Off,
  Disabled,
}

export enum ControlSensor {
  ManualSet,
  AutoSet,
  ReturnAirSensor,
}

export enum FanAuto {
  TwoSpeed,
  ThreeSpeed,
  VariableSpeed,
  Disabled,
}

export interface Status {
  loading: boolean;
  error?: string;
  on?: boolean;
  mode?: string;
  fan?: string;
  sleepTimer?: number;
  unitType?: string;
  supplyTemp?: number;
  setpoint?: number;
  temp?: number;
  controlSensor?: string;
  controlZone?: number;
  ecoLock?: boolean;
  ecoMin?: number;
  ecoMax?: number;
  totalZoneCount?: number;
  constantZoneCount?: number;
  airflowLock?: AirflowLock;
  unitLock?: boolean;
  freeAir?: FreeAir;
  fanAuto?: string;
}

export const initialState: { status: Status } = {
  status: {
    loading: false,
  },
};

const statusReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case STATUS_START:
      return {
        ...state,
        status: {
          ...state.status,
          loading: true,
          error: undefined,
        },
      };
    case STATUS_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          loading: false,
          error: action.error,
        },
      };
    case STATUS_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          loading: false,
          on: action.payload.SysOn === 'on',
          mode: switchCase({
            cool: Mode.Cool,
            heat: Mode.Heat,
            vent: Mode.Vent,
            dry: Mode.Dry,
            auto: Mode.Auto,
          })(action.payload.SysMode),
          fan: switchCase({
            low: Fan.Low,
            med: Fan.Medium,
            high: Fan.High,
            auto: Fan.Auto,
          })(action.payload.SysFan),
          sleepTimer: action.payload.SleepTimer,
          unitType: action.payload.UnitType,
          supplyTemp: Number(action.payload.Supply),
          setpoint: Number(action.payload.Setpoint),
          temp: Number(action.payload.Temp),
          controlSensor: switchCase({
            master: ControlSensor.ManualSet,
            zones: ControlSensor.AutoSet,
            RAS: ControlSensor.ReturnAirSensor,
          })(action.payload.RAS),
          controlZone: action.payload.CtrlZone,
          ecoLock: action.payload.EcoLock === 'true',
          ecoMin: Number(action.payload.EcoMin),
          ecoMax: Number(action.payload.EcoMax),
          totalZoneCount: action.payload.NoOfZones,
          constantZoneCount: action.payload.NoOfConst,
          airflowLock: switchCase({
            onMin: AirflowLock.MinLocked,
            on: AirflowLock.MinMaxLocked,
            off: AirflowLock.Off,
          })(action.payload.AirflowLock),
          unitLock: action.payload.UnitLocked === 'true',
          freeAir: switchCase({
            disabled: FreeAir.Disabled,
            on: FreeAir.On,
            off: FreeAir.Off,
          })(action.payload.FreeAir),
          fanAuto: switchCase({
            disabled: FanAuto.Disabled,
            '2-speed': FanAuto.TwoSpeed,
            '3-speed': FanAuto.ThreeSpeed,
            'var-speed': FanAuto.VariableSpeed,
          })(action.payload.FanAuto),
        },
      };
    default:
      return state;
  }
};

export default statusReducer;
