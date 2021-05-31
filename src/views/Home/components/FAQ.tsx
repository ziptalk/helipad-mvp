import styled from "styled-components";
import React from "react";

const FAQ = () => {
    return (
        <Container>
            1.Account Support – skipped here<br />
            2.Technical Support – skipped here<br />
            3.Accounting Support – skipped here<br />
            4.Buying Process<br />
            5.Selling/Listing Process<br />
            6.Property Management<br />
            5. Buying Process – West Coast<br />
            1.What’s the overall purchasing process in the US?<br />
            a.Hire a licensed real estate agent at Helipad by signing Buyer Brokerage Agreement. (sub-link: Buyer Brokerage Agreement)<br />
            b.Prepare Proof of Fund. (sub-link: Proof of Fund)<br />
            c.Discuss your investment goals and needs and set up search criteria from MLS. (sub-link: MLS)<br />
            d.Set up showings or virtual showings. (sub-link: Showing/Tour)<br />
            e.Make an offer. (sub-link: Offer)<br />
            f.Open an escrow and wire the Earnest Money Deposit. (sub-link: Escrow & Earnest Money Deposit)<br />
            g.Order a home inspection and negotiate repair items/credits during due diligence period. (sub-link: Home Inspection & Due Diligence)<br />
            h.Run comps and provide Comparative Market Analysis to your banker overseas. (sub-link: Comps/CMA)<br />
            i.Review preliminary title report. (sub-link: Title Report)<br />
            j.Review HOA documents if there is any. (sub-link: HOA)<br />
            k.Perform final walkthrough. (sub-link: walkthrough)<br />
            l.Review Estimated Settlement Statement. (sub-link: ESS & Closing Cost)<br />
            m.Wire closing fund. (sub-link: Fund)<br />
            n.Recording and getting the key. (sub-link: Recording)<br />
            a.What’s Buyer Brokerage Agreement?<br />
            b.Why should I provide a proof of fund (POF)?<br />
            c.What’s MLS?<br />
            d.How are showings/tours getting done when I’m outside of the US?<br />
            e.What are included in the offer?<br />
            f.What’s escrow? Who holds Earnest Money Deposit and how much it is? Is this an additional cost? Is my money secure?<br />
            g.What do I do during the due diligence period? Who does home inspection on what? What do I do with the inspection results?<br />
            h.What does comps/CMA mean? How does my bank outside of the US require this?<br />
            i.What’s preliminary title report? What’s title insurance?<br />
            j.What’s HOA? Why is this important?<br />
            k.Why do I do a walk through?<br />
            l.What’s ESS and closing cost?<br />
            m.How do I wire closing fund and how much should I wire? Where am I wiring to?<br />
            n.How long does it take to record my property? Is my title record a public information?<br />
            2.Why am I only working with one agent?<br />
            3.What if I want do cancel? What are the contingencies? (sub-link: contingencies)<br />
            4.What are the maintenance cost/expenses? (Second home vs rental income producing properties)<br />
            5.What are the taxes do I have to pay when purchasing a propertyin the US?<br />
            6. Selling/Listing Process<br />
            1.What’s the overall selling/listing process in the US?<br />
            a.Consult with Helipad professional on listing price. (sub-link: Comps)<br />
            b.Physical visit of the property and repair recommendation to maximize the profit. (sub-link: prepare for listing)<br />
            c.Sign a Helipad exclusive listing agreement. (sub-link: listing agreement)<br />
            d.List the property. (sub-link: MLS)<br />
            e.Market the property. (sub-link: Marketing)<br />
            f.Receive offer(s). (sub-link: Offer)<br />
            g.Open escrow. (sub-link: Escrow & Earnest Money Deposit)<br />
            h.Order HOA resale package & demand if there is any. (sub-link: HOA ResalePackage & Demand)<br />
            i.Buyer’s home inspection. (sub-link: Home Inspection)<br />
            j.Buyer’s appraisal if financing buyer. (sub-link: appraisal)<br />
            k.Buyer’s financing contingency. (sub-link: financing contingency)<br />
            l.Buyer’s walkthrough. (sub-link: walkthrough)<br />
            m.Review Estimated Settlement Statement. (sub-link: ESS)<br />
            n.Recording and escrow disbursement. (sub-link: Recording)<br />
            a.What’s comps? Why is it important?<br />
            b.What’s included in a preparation process?<br />
            c.What does the listing agreement include? (sub-link: title insurance & HOA)<br />
            d.What’s MLS?<br />
            e.What are the marketing activities Helipad do to sell my property at a top dollar?<br />
            f.What are included in the offer?<br />
            2.Why do I have to sign an exclusive listing agreement?<br />
            3.What’s the commission rate and who pays for it?<br />
            4.How much will I be netting?<br />
            5.Where is the buyer’s EMD being held at?<br />
            6.When do I get my money?<br />
            7.Where is the buyer’s EMD being held at?<br />
            8.What are the taxes do I have to pay? (long-term or short-term income/capital gain tax, transfer tax) <br />
            7. Property Management<br />
            1.What’s the property management?<br />
            2.What are the lease types in the US? (월세 vs 전세)<br />
            3.How long is the lease for?<br />
            4.Can I do an AirBNB and does Helipad manage AirBNB properties?<br />
            5.How much is Helipad charging for property management fee?<br />
            6.What’s included in the PM service? (see the attached for my PM service)<br />
            7.How do I know if I’m getting a quality tenant?<br />
            8.How and when do I get my rental income?<br />
            9.What happened my tenant does not pay rent?<br />
            10.What if I want to sell it while my lease is still in place? Can I still show the property?
            11.Who pays for the damages when a tenant is moving out? (damage, negligence vs normal wear & tear)
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubContent = styled.div`
  display: flex;
  margin-left: 30px;
`;

export default FAQ;