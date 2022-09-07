package com.dsmeta.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.dsmeta.backend.entities.Sale;
import com.dsmeta.backend.repositories.SaleRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {
	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;

	@Autowired
	private SaleRepository repository;
	
	public void sendSms(Long id) {
		Sale sale = repository.findById(id).get();

		String saleDate = sale.getDate().getDayOfMonth() + "/" + sale.getDate().getMonth() + "/" + sale.getDate().getYear();
		
		String messageContent = "O vendedor " + sale.getSellerName() + " foi destaque em " + saleDate + " com um total de R$" + String.format("%.2f", sale.getAmount());
		
		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);
		
		Message message = Message.creator(to, from, messageContent).create();

		System.out.println(message.getSid());
	}
}
