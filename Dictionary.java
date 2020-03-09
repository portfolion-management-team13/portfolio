package core;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Dictionary {
	
	Map<String, Long> wordsMap;
	char[] alphabet = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
	public Dictionary(String filePath) {
		this.initialDictionary(filePath);
	}
	
	/**
	 * read file by filePath
	 * @filePath
	 * @return Stream<String>
	 * @exception IOException
	 * */
	private void initialDictionary(String filePath){
		try {
			this.wordsMap = Files.lines(Paths.get(filePath)).collect(Collectors.groupingBy(String::toString,Collectors.counting())   );
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		}
	/*
	public Map<String, Long> getWordsMap() {
		return wordsMap;
	}*/
	
	public String correct(String word){
		word = word.toLowerCase();
		List<String> passedWords;
		List<String> inputWords = new ArrayList<String>();
		inputWords.add(word);
		passedWords = this.selectInclude(inputWords);
		if(passedWords.size()<1) {
			inputWords = this.edit(inputWords); // first edit distance = 1
			passedWords = this.selectInclude(inputWords);
			if(passedWords.size()<1) {
				inputWords = this.edit2(inputWords); // second edit distance = 2
				passedWords = this.selectInclude(inputWords);
				if(passedWords.size()<1) {
					return word;
				}
				else {
					return outPutMaxMap(passedWords);
				}
			}
			else {
				return outPutMaxMap(passedWords);
			}
		}else {
			return word;
		}
	}
	
	private String outPutMaxMap(List<String> list) {
		String maxKey="";
		Long maxValue = 0L;
		Long currentValue;
		for(String item:list) {
			currentValue = this.wordsMap.get(item);
			if(currentValue > maxValue) {
				maxValue = currentValue;
				maxKey = item;
			}
		}
		return maxKey;
	}
	
	
	/**
	 * edit input words by deletion, insert, moving and replacement
	 * */
	private List<String> edit(List<String> words) {
		List<String> words_edit = new ArrayList<String>();
		int lens = words.size();
		for(int i=0;i<lens;i++) {
			String word =words.get(i);
			int len = word.length();
			for(int j=0;j<len;j++) {
				if (j!= len - 1) {
					// add remove operations
					words_edit.add(this.removeCharAt(word, j));
					// add moving operations
					if(j != len -2) {
						// come here, length must > 2 
						words_edit.add(this.moveCharAt(word, j, j+1));
					}
					else {
						// when come to tail
						words_edit.add(this.moveCharAtTail(word));
					}
					// add replacement operations
					for(char ch:alphabet) {
						words_edit.add(this.replaceCharAt(word, j, ch));
						words_edit.add(this.insertCharAt(word, j, ch));
					}
					
				}
				else {
					// remove
					words_edit.add(this.removeCharAtTail(word));
					for(char ch:alphabet) {
						words_edit.add(this.replaceCharAtTail(word, ch));
						words_edit.add(this.insertCharAtTail(word, ch));
					}
				}
				
			}
			
		}
		return words_edit;
	}
	
	/*
	 * second recorrection
	 * there come to a word which already be edited once
	 * because the max acceptable distance is 2, so here we can fiter results by wordsMap
	 * */
	private List<String> edit2(List<String> words_list_1) {
		List<String> words_list_2 = this.edit(words_list_1);
		// wods list include the word which edit distance is 2
		List<String> edit2_word = new ArrayList<String>();
		for(String item:words_list_2) {
			if(this.wordsMap.containsKey(item)) {
				edit2_word.add(item);
			}
		}
		return edit2_word;
	}
	
	
	
	private String removeCharAt(String s, int pos) {
		return s.substring(0, pos) + s.substring(pos + 1);
	}
	
	private String removeCharAtTail(String s) {
		int pos = s.length() - 1;
		return s.substring(0, pos);
	}
	
	/*
	 * pos1 should less than pos2,
	 * do not check here for improving efficient
	 * please take care
	 * */
	private String moveCharAt(String s, int pos1, int pos2) {
		return s.substring(0, pos1) + s.charAt(pos2) +s.charAt(pos1)+ s.substring(pos2 + 1);
	}
	
	/*
	 * pos1 should little than pos2,
	 * do not check here for efficient
	 * please take care
	 * */
	private String moveCharAtTail(String s) {
		int pos = s.length()-2;
		return s.substring(0, pos) + s.charAt(pos+1) +s.charAt(pos);
	}
	
	/*
	 *replace a char which position is pos of the s 
	 * */
	private String replaceCharAt(String s, int pos, char ch) {
		return s.substring(0, pos) + ch + s.substring(pos+1);
	}
	
	private String replaceCharAtTail(String s, char ch) {
		int pos = s.length() - 2;
		return s.substring(0, pos) + ch + s.substring(pos+1);
	}
	
	/*
	 * insert a char into String s which position = pos
	 * 
	 * */
	private String insertCharAt(String s,int pos, char ch) {
		return s.substring(0, pos) + ch + s.substring(pos);
	}
	
	private String insertCharAtTail(String s,char ch) {
		return s+ch;
	}
	
	private List<String> selectInclude(List<String> words) {
		List<String> results = new ArrayList<String>();
		for(String item:words) {
			if(this.wordsMap.containsKey(item)) {
				results.add(item);
			}
		}
		return results;
	}
	

}
