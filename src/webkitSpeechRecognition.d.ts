// Type definitions for Web Speech API
// Project: https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html
// Definitions by: SaschaNaz <https://github.com/saschanaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// Spec version: 19 October 2012
// Errata version: 6 June 2014
// Corrected unofficial spec version: 6 June 2014

interface SpeechRecognition extends EventTarget {
  grammars: SpeechGrammarList;
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  serviceURI: string;

  start(): void;
  stop(): void;
  abort(): void;
  onaudioend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onaudiostart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onerror: ((this: SpeechRecognition, ev: Event) => any) | null;
  onnomatch:
    | ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any)
    | null;
  onresult:
    | ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any)
    | null;
  onsoundend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onsoundstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onspeechend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onspeechstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
}
interface SpeechRecognitionStatic {
  prototype: SpeechRecognition;
  new (): SpeechRecognition;
}
declare let SpeechRecognition: SpeechRecognitionStatic;
declare let webkitSpeechRecognition: SpeechRecognitionStatic;

interface SpeechRecognitionError extends Event {
  error: string;
  message: string;
}

interface SpeechRecognitionAlternative {
  readonly transcript: string;
  readonly confidence: number;
}

interface SpeechRecognitionResult {
  readonly length: number;
  item(index: number): SpeechRecognitionAlternative;
  // [index: number]: SpeechRecognitionAlternative;
  /* Errata 02 */
  readonly isFinal: boolean;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  // [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: SpeechRecognitionResultList;
  interpretation: any;
  emma: Document;
}

interface SpeechGrammar {
  src: string;
  weight: number;
}
interface SpeechGrammarStatic {
  prototype: SpeechGrammar;
  new (): SpeechGrammar;
}
declare let SpeechGrammar: SpeechGrammarStatic;
declare let webkitSpeechGrammar: SpeechGrammarStatic;

interface SpeechGrammarList {
  readonly length: number;
  item(index: number): SpeechGrammar;
  // [index: number]: SpeechGrammar;
  addFromURI(src: string, weight: number): void;
  addFromString(string: string, weight: number): void;
}
interface SpeechGrammarListStatic {
  prototype: SpeechGrammarList;
  new (): SpeechGrammarList;
}
declare let SpeechGrammarList: SpeechGrammarListStatic;
declare let webkitSpeechGrammarList: SpeechGrammarListStatic;
