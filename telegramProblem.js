var string1 = "Researchers have published in PNAS promising results from a snail venom analogue used in the treatment of pain. This is exciting for a number of reasons, even if the current compounds under study do not pan out. Pain is a difficult clinical problem. There are limited options for treating chronic pain and we can quickly run out of options if patients cannot tolerate certain classes of drugs. What we really need are entirely new classes of pain medication, and that is what this new approach promises. There are essentially two neurological components to pain: there is the physical sensation, and then there is the emotional component. It is interesting to ask the question, why does pain hurt? There is nothing about the sensation itself that is inherently painful. Any sensation is just nerve cells firing and carrying signals to areas of the brain that interpret those signals. Pain hurts because pain pathways specifically connect to the emotional centers in the brain to create a negative experience. For further background, clinically it is helpful to distinguish different types of pain. There is nociceptive pain, which is the nervous system appropriately sensing damage and generating protective painful sensations. There is also neuropathic pain, which is the nervous system malfunctioning and producing inappropriate pain that is not protective. We further divide pain into acute and chronic. Finally, we consider the context of the patient, such as whether or not they are terminal. Opioids act mainly on central receptors that naturally block the perception of pain. These receptors block not only the pain but the emotional component of the pain. In fact the opposite emotional response can occur, euphoria. That is a strong component of why opioids are addictive. Opioids also suppress the respiratory centers, which is why overdoses are so deadly. In addition to being addictive, opioids also display tolerance, meaning that they work less well over time. This is because they downregulate the receptors to which they bind, so there are less of them available. In fact this shifts the balance in the brain, so that at baseline chronic opioid users are dysphoric and hypersensitive to pain and they need to use opiates just to feel somewhat normal.  All of this is why chronic opiate use is so problematic in treating chronic pain – it makes the underlying pain worse and harder to treat. NSAIDS (non-steroidal anti-inflammatory drugs) are another class of pain killers. These are the aspirin-like drugs, and are good first line pain treatments (available over the counter). Their advantage is that they are also anti-inflammatory, which is a common component of acute problems that cause pain. They have a ceiling effect, meaning that there is a maximum dose beyond which there is no further pain relief. Opioids by contrast have no ceiling, so you can always get more pain relief with a higher dose. The limiting factor for opioids is that at some point you will stop breathing. Acetaminophen is another OTC pain reliever, although not anti-inflammatory. There is also tramodol which is centrally acting but non-opiate. It is less addictive and has less tolerance, but still has some of these negative features. None of these pain drugs are very useful in chronic neuropathic pain. For that condition we need to use other drugs entirely, including anti-seizure drugs and anti-depressants, that suppress neuropathic pain production or conduction. These are variably effective. At present there is no perfect pain medication. There is no medication that can entirely relieve pain in a sustainable way without serious side effects limiting their use. Many patients cannot tolerate entire classes of pain drugs. Allergies can eliminate many drugs. If a patient has kidney problems or gastric ulcers they may not tolerate NSAIDS. Opiates are not appropriate for many patients. We can therefore quickly run out of good options.";

function initFunc(str, maxNum){
	var re = new RegExp("[^A-Za-z0-9\s]");

	strArray = str.replace(re, "").split(' ');

	return checkForMaxLength(strArray, maxNum);
}

function checkForMaxLength(arr, maxNum){
	var array1 = [];

	arr.forEach(function(element, index, array){
		if(element.length <= maxNum){
			array1.push(element);
		}
	});

	return array1;
}

console.log(initFunc(string1, 10));