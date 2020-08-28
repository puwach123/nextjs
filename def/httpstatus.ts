export type HttpStatus = {
  code: number;
  text: string;
  description: string;
};

/**
 * 1xx: Informational - It means the request has been received and the process is continusing.
 * 2xx: Success: It means the action was successfully received, understood, and accepted.
 * 3xx: Redirection: It means further action must be taken in order to complete the request.
 * 4xx: Client Error: It means the request contains incorrect syntax or cannot be fulfilled.
 * 5xx: Server Error: It means the server failed to fulfill an apparently valid request.
 */

export const Continue: HttpStatus = Object.freeze({
  code: 100,
  text: "Continue",
  description: "Everything so far is ok.",
});
export const SwitchingProtocols: HttpStatus = Object.freeze({
  code: 101,
  text: "Switching Protocols",
  description: "The protocol is switched as to the requested.",
});
export const Processing: HttpStatus = Object.freeze({
  code: 102,
  text: "Processing",
  description: "The request is received and is processing.",
});
export const EarlyHints: HttpStatus = Object.freeze({
  code: 103,
  text: "Early Hints",
  description:
    "The client should start preloading resources as the server prepares a response.",
});

export const OK: HttpStatus = Object.freeze({
  code: 200,
  text: "OK",
  description: "The request is succeeded.",
});
export const Created: HttpStatus = Object.freeze({
  code: 201,
  text: "Created",
  description: "The request is succeeded and a new resource has been created",
});
export const Accepted: HttpStatus = Object.freeze({
  code: 202,
  text: "Accepted",
  description: "The request is received but not yet acted upon.",
});
export const NonAuthoritativeInfo: HttpStatus = Object.freeze({
  code: 203,
  text: "Non-Authoritative Information",
  description:
    "The returned meta-info is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy.",
});
export const NoContent: HttpStatus = Object.freeze({
  code: 204,
  text: "No Content",
  description: "No contend sent by the server.",
});
export const ResetContent: HttpStatus = Object.freeze({
  code: 205,
  text: "Reset Content",
  description: "The client should reset the document.",
});
export const PartialContent: HttpStatus = Object.freeze({
  code: 206,
  text: "Partial Content",
  description:
    "The request has succeeded and has the body contains the requested ranges of data.",
});
export const MultiStatus: HttpStatus = Object.freeze({
  code: 207,
  text: "Multi-Status",
  description: "",
});
export const AlreadyReported: HttpStatus = Object.freeze({
  code: 208,
  text: "Already Reported",
  description: "",
});
export const IMUsed: HttpStatus = Object.freeze({
  code: 226,
  text: "IM Used",
  description: "The request is fulfilled.",
});

export const MultipleChoices: HttpStatus = Object.freeze({
  code: 300,
  text: "Multiple Choices",
  description:
    "The request has more than one possible response. The client should choose on of them.",
});
export const MovedPermanently: HttpStatus = Object.freeze({
  code: 301,
  text: "Moved Permanently",
  description:
    "The URL of the requested resource has been changed permanently,",
});
export const Found: HttpStatus = Object.freeze({
  code: 302,
  text: "Found",
  description: "The URI of requested resource has been changed.",
});
export const SeeOther: HttpStatus = Object.freeze({
  code: 303,
  text: "See Other",
  description: "The requested resource is accessible by getting another URI .",
});
export const NotModified: HttpStatus = Object.freeze({
  code: 304,
  text: "Not Modified",
  description: "The requested resource has not been modified.",
});
export const UseProxy: HttpStatus = Object.freeze({
  code: 305,
  text: "UseProxy",
  description: "The requested resource must be accessed by a proxy.",
});
export const TemporaryRedirect: HttpStatus = Object.freeze({
  code: 307,
  text: "Temporary Redirect",
  description:
    "The requested resource is getting at another URI with the same method that was use in the prior request.",
});
export const PermanentRedirect: HttpStatus = Object.freeze({
  code: 308,
  text: "Permanent Redirect",
  description:
    "The requested resource is not permanently located at another URI.",
});

export const BadRequest: HttpStatus = Object.freeze({
  code: 400,
  text: "Bad Request",
  description:
    "The server could not understand the request due to invalid syntax.",
});
export const Unauthorized: HttpStatus = Object.freeze({
  code: 401,
  text: "Unauthorized",
  description: "The client is not authenticated.",
});
export const PaymentRequired: HttpStatus = Object.freeze({
  code: 402,
  text: "Payment Required",
  description: "",
});
export const Forbidden: HttpStatus = Object.freeze({
  code: 403,
  text: "Forbidden",
  description: "The client does not have access rights to the content.",
});
export const NotFound: HttpStatus = Object.freeze({
  code: 404,
  text: "Not Found",
  description: "The server can not find the requested resource.",
});
export const MethodNotAllowed: HttpStatus = Object.freeze({
  code: 405,
  text: "Method Not Allowed",
  description: "The method is not allowed.",
});
export const NotAcceptable: HttpStatus = Object.freeze({
  code: 406,
  text: "Not Acceptable",
  description:
    "The server does not find any content that conforms to the criteria given by the client.",
});
export const ProxyAuthRequired: HttpStatus = Object.freeze({
  code: 407,
  text: "Proxy Authentication Required",
  description: "The client is not authenticated to the proxy.",
});
export const RequestTimeout: HttpStatus = Object.freeze({
  code: 408,
  text: "Request Timeout",
  description:
    "The server does not receive a complete request message within the time that it was prepared to wait.",
});
export const Conflict: HttpStatus = Object.freeze({
  code: 409,
  text: "Conflict",
  description:
    "The request could not be completed due to a conflict with the current state of the target resource.",
});
export const Gone: HttpStatus = Object.freeze({
  code: 410,
  text: "Gone",
  description:
    "The access to the requested resource is no longer available at the origin server.",
});
export const LengthRequired: HttpStatus = Object.freeze({
  code: 411,
  text: "Length Required",
  description: "The request is missing a defined content-length.",
});
export const PreconditionFailed: HttpStatus = Object.freeze({
  code: 412,
  text: "Precondition Failed",
  description:
    "The client has indecated preconditions in its headers which the server does not meet",
});
export const RequestEntityTooLarge: HttpStatus = Object.freeze({
  code: 413,
  text: "Request Entity Too Large",
  description:
    "The request payload is larger than limits defined by the server.",
});
export const RequestURITooLong: HttpStatus = Object.freeze({
  code: 414,
  text: "Request URI Too Long",
  description: "The URI is too long.",
});
export const UnsupportedMediaType: HttpStatus = Object.freeze({
  code: 415,
  text: "Unsupported Media Type",
  description: "The format of the request payload is not supported",
});
export const RequestedRangeNotSatisfiable: HttpStatus = Object.freeze({
  code: 416,
  text: "Requested Range Not Satisfiable",
  description: "The range specified in the request can not be fullfilled.",
});
export const ExpectationFailed: HttpStatus = Object.freeze({
  code: 417,
  text: "Expectation Failed",
  description: "The expectation specified can not be met.",
});
export const Teapot: HttpStatus = Object.freeze({
  code: 418,
  text: "I'm a teapot",
  description: "The server refuses the attempt to brew coffee with a teapot.",
});
export const MisdirectedRequest: HttpStatus = Object.freeze({
  code: 421,
  text: "Misdirected Request",
  description:
    "The request was directed at a server that is not able to produce a reponse.",
});
export const UnprocessableEntity: HttpStatus = Object.freeze({
  code: 422,
  text: "Unprocessable Entity",
  description:
    "The request was well-formed but was unable to be followed due to semantic errors.",
});
export const Locked: HttpStatus = Object.freeze({
  code: 423,
  text: "Locked",
  description: "The access to the requested resource is locked.",
});
export const FailedDependency: HttpStatus = Object.freeze({
  code: 424,
  text: "Failed Dependency",
  description: "The request failed due to failure of a previous request.",
});
export const UpgradeRequired: HttpStatus = Object.freeze({
  code: 426,
  text: "Upgrade Required",
  description: "The client need to upgrade to a different protocol.",
});
export const PreconditionRequired: HttpStatus = Object.freeze({
  code: 428,
  text: "Precondition Required",
  description: "The request need to be conditional.",
});
export const TooManyRequests: HttpStatus = Object.freeze({
  code: 429,
  text: "Too Many Requests",
  description: "The user has sent too many requests in a given amount of time.",
});
export const RequestHeaderFieldsTooLarge: HttpStatus = Object.freeze({
  code: 431,
  text: "Request Header Fields Too Large",
  description:
    "The header of the request is larger than limits defined by the server.",
});
export const UnavailableForLegalReasons: HttpStatus = Object.freeze({
  code: 451,
  text: "Unavailable For Legal Reasons",
  description: "The access to the requested resource is legally prohibited.",
});

export const InternalServerError: HttpStatus = Object.freeze({
  code: 500,
  text: "Internal Server Error",
  description:
    "The server has encounted a situation it does not know how to handle.",
});
export const NotImplemented: HttpStatus = Object.freeze({
  code: 501,
  text: "Not Implemented",
  description:
    "The request method is not supported by the server and cannot be handled.",
});
export const BadGateway: HttpStatus = Object.freeze({
  code: 502,
  text: "Bad Gateway",
  description: "Ther server working as a gateway got an invalid response ",
});
export const ServiceUnavailable: HttpStatus = Object.freeze({
  code: 503,
  text: "Service Unavailable",
  description: "The server is not ready to handle the request.",
});
export const GatewayTimeout: HttpStatus = Object.freeze({
  code: 504,
  text: "Gateway Timeout",
  description:
    "The server is acting as gateway and cannot get a response in time.",
});
export const HTTPVersionNotSupported: HttpStatus = Object.freeze({
  code: 505,
  text: "HTTP Version Not Supported",
  description:
    "The HTTP veriosn used in the request is not supported by the server.",
});
export const VariantAlsoNegotiates: HttpStatus = Object.freeze({
  code: 506,
  text: "Variant Also Negotiates",
  description: "The server has an internal configuration error.",
});
export const InsufficientStorage: HttpStatus = Object.freeze({
  code: 507,
  text: "Insufficient Storage",
  description: "The server does not have enough amount of storage.",
});
export const LoopDetected: HttpStatus = Object.freeze({
  code: 508,
  text: "Loop Detected",
  description:
    "The server detected an infinite loop while processing the request.",
});
export const NotExtended: HttpStatus = Object.freeze({
  code: 510,
  text: "Not Extended",
  description:
    "Further extensions to the request are required for the server to filfil it.",
});
export const NetworkAuthenticationRequired: HttpStatus = Object.freeze({
  code: 511,
  text: "Network Authentication Required",
  description: "The client needs to authenticate to gain network access.",
});

export default Object.freeze({
  Continue,
  SwitchingProtocols,
  Processing,

  OK,
  Created,
  Accepted,
  NonAuthoritativeInfo,
  NoContent,
  ResetContent,
  PartialContent,
  MultiStatus,
  AlreadyReported,
  IMUsed,

  MultipleChoices,
  MovedPermanently,
  Found,
  SeeOther,
  NotModified,
  UseProxy,
  TemporaryRedirect,
  PermanentRedirect,

  BadRequest,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  NotAcceptable,
  ProxyAuthRequired,
  RequestTimeout,
  Conflict,
  Gone,
  LengthRequired,
  PreconditionFailed,
  RequestEntityTooLarge,
  RequestURITooLong,
  UnsupportedMediaType,
  RequestedRangeNotSatisfiable,
  ExpectationFailed,
  Teapot,
  MisdirectedRequest,
  UnprocessableEntity,
  Locked,
  FailedDependency,
  UpgradeRequired,
  PreconditionRequired,
  TooManyRequests,
  RequestHeaderFieldsTooLarge,
  UnavailableForLegalReasons,

  InternalServerError,
  NotImplemented,
  BadGateway,
  ServiceUnavailable,
  GatewayTimeout,
  HTTPVersionNotSupported,
  VariantAlsoNegotiates,
  InsufficientStorage,
  LoopDetected,
  NotExtended,
  NetworkAuthenticationRequired,
});
