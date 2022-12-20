import { FunctionComponent, useMemo, useState, useCallback } from "react";
import CSS, { Property } from "csstype";
import SelectTokenTypeButton from "../components/SelectTokenTypeButton";
import "./IWantToSelectTokenComponent.css";

type IWantToSelectTokenComponentType = {
  iWantToDo?: string;
  tokenActionClicked: (action: string | undefined, tokenName: string | undefined) => void;

  /** Style props */
  tradeCatalogWidth?: Property.Width;
  tradeCatalogPadding?: Property.Padding;
};

const IWantToSelectTokenComponent: FunctionComponent<
  IWantToSelectTokenComponentType
> = ({ iWantToDo, tradeCatalogWidth, tradeCatalogPadding, tokenActionClicked}) => {
  const [buttons, setButtons] =
    useState<{tokenName: string; disabled: boolean}[]>([
      {tokenName: "Token", disabled: false},
      {tokenName: "NFT", disabled: false},
      {tokenName: "Fiat", disabled: false},
      {tokenName: "Goods", disabled: false},
      {tokenName: "Service", disabled: false},
    ]);
  const tradeCatalogStyle: CSS.Properties = useMemo(() => {
    return {
      width: tradeCatalogWidth,
      padding: tradeCatalogPadding,
    };
  }, [tradeCatalogWidth, tradeCatalogPadding]);

  const traceToken = useCallback((action: string | undefined, tokenName: string | undefined) => {
    setButtons(prev => 
      {
        let ele = prev.find(a => a.tokenName === tokenName);
        if(ele?.disabled)
        {
          ele.disabled = false;
        }
        prev.filter(a => a.tokenName != tokenName)
          .map(a => a.disabled = true);
        return [...prev];
      });      
      tokenActionClicked(action, tokenName);
  }, [buttons]);

  return (
    <div className="frame-div9">
      <div className="i-want-to-sell">{iWantToDo}</div>
      <div className="tradecatalog" style={tradeCatalogStyle}>
        <SelectTokenTypeButton
          tokenClicked={e => traceToken(iWantToDo, e)}
          key={buttons.find(a => a.tokenName === "Token")?.tokenName}
          tokenTypeName="Token"
          selectTokenButtonBackgroundColor={buttons.find(a => a.tokenName === "Token")!.disabled ? "lightgrey" : "var(--color-orange)"}
          materialSymbolsgenerating="../asserts/materialsymbolsgeneratingtokensrounded.svg"
        />
        <SelectTokenTypeButton
          tokenClicked={e => traceToken(iWantToDo, e)}
          tokenTypeName="NFT"
          selectTokenButtonBackgroundColor={buttons.find(a => a.tokenName === "NFT")!.disabled ? "lightgrey" : "var(--color-indigo)"}
          selectTokenButtonPadding="var(--padding-2xs) 0px"
          selectTokenButtonBoxShadow="unset"
          materialSymbolsgenerating="../asserts/materialsymbolstokenrounded.svg"
          tokenColor="var(--color-white1)"
        />
        <SelectTokenTypeButton
          tokenClicked={e => traceToken(iWantToDo, e)}
          tokenTypeName="Fiat"
          selectTokenButtonBackgroundColor={buttons.find(a => a.tokenName === "Fiat")!.disabled ? "lightgrey" : "var(--color-subbrand)"}
          selectTokenButtonPadding="var(--padding-sm)"
          materialSymbolsgenerating="../asserts/phmoneylight.svg"
          selectTokenButtonFlexDirection="row"
          frame38Width="90px"
          frame38Height="56px"
          frame38FlexShrink="0"
        />
        <SelectTokenTypeButton
          tokenClicked={e => traceToken(iWantToDo, e)}
          tokenTypeName="Goods"
          selectTokenButtonBackgroundColor={buttons.find(a => a.tokenName === "Goods")!.disabled ? "lightgrey" : "var(--color-coral)"}
          selectTokenButtonPadding="var(--padding-2xs) 0px"
          selectTokenButtonBoxShadow="unset"
          materialSymbolsgenerating="../asserts/lucidepackageopen.svg"
          tokenColor="var(--color-white1)"
        />
        <SelectTokenTypeButton
          tokenClicked={e => traceToken(iWantToDo, e)}
          tokenTypeName="Service"
          selectTokenButtonBackgroundColor={buttons.find(a => a.tokenName === "Service")!.disabled ? "lightgrey" : "var(--color-green-100)"}
          selectTokenButtonPadding="var(--padding-2xs) 0px"
          selectTokenButtonBoxShadow="unset"
          materialSymbolsgenerating="../asserts/mdiworkeroutline.svg"
        />
      </div>
    </div>
  );
};

export default IWantToSelectTokenComponent;
