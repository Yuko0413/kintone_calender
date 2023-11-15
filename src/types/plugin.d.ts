declare namespace Plugin {
  /** 🔌 プラグインがアプリ単位で保存する設定情報 */
  type Config = ConfigV1;

  /** 🔌 プラグインの詳細設定 */
  type Condition = Config['conditions'][number];

  /** 🔌 過去全てのバージョンを含むプラグインの設定情報 */
  type AnyConfig = ConfigV1; // | ConfigV2 | ...;

  type ConfigV1 = {
    version: 1;
    conditions: {
      viewId: string;
      initialView:
        | 'dayGridMonth'
        | 'timeGridWeek'
        | 'timeGridDay'
        | 'timeGridFiveDay'
        | 'timeGridThreeDay';
      enablesAllDay: boolean;
      allDayOption: string;
      enablesNote: boolean;
      slotMaxTime: string;
      slotMinTime: string;
      calendarEvent: {
        titleField: string;
        startField: string;
        endField: string;
        allDayField: string;
        noteField: string;
        categoryField: string;
      };
    }[];
  };
}
