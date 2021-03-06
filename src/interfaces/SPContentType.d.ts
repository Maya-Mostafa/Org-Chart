export interface SPContentType {
  Description: string;
  DisplayFormTemplateName: string;
  DisplayFormUrl: string;
  DocumentTemplate: string;
  DocumentTemplateUrl: string;
  EditFormTemplateName: string;
  EditFormUrl: string;
  Group: string;
  Hidden: boolean;
  Id: Id;
  JSLink: string;
  MobileDisplayFormUrl: string;
  MobileEditFormUrl: string;
  MobileNewFormUrl: string;
  Name: string;
  NewFormTemplateName: string;
  NewFormUrl: string;
  ReadOnly: boolean;
  SchemaXml: string;
  Scope: string;
  Sealed: boolean;
  StringId: string;
}
export interface Id {
  StringValue: string;
}
