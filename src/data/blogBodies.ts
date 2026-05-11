// AUTO-GENERATED blog HTML bodies — content is verbatim from source HTML.
// Image / video / audio assets have been replaced with placeholders.
// Drop original assets into src/assets/blogs/ and swap the placeholder divs later.

export const blogBodies: Record<string, string> = {
  "how-machines-learn": `
                        <h2 id="machenelearning">Machine learning</h2>
                        <p>Machine learning is a branch of Artificial Intelligence, where a machine learns without
                            explicitly programmed, machine learning concerns the development and study of statistical
                            algorithms that can learn from data and generalize to unseen data, and thus
                            perform tasks without explicit instructions.</p>
                        <p>Machine learning is a set of algorithms. It involves using algorithms to identify hidden
                            patterns in datasets, enabling predictions on new data. </p>
                        <blockquote>
                            <p>a computer’s ability to learn without being explicitly programmed.</p>
                            <cite>by computer scientist Arthur Samuel</cite>
                        </blockquote>
                        <h2 id="machenelearningworkflow">Machine Learning Workflow</h2>
                        <p>For a human the learning basically is reading, understating and answering. These are the
                            three simple steps we as a human follow. Similarly, to make a machine learn, we make the
                            machine to follow the same three simple steps. In machine terms those are collecting data,
                            processing data and making predictions out of it.</p>
                        <p>To make a machine learn from our data, the data needs to be in a machine-understandable way
                            so our first step is data preprocessing, after making the data into machine
                            machine-understandable format we need to treat the data to the machine. For perfect
                            training, we required a perfect model so our next step is to select a perfect model. Now
                            machine is giving the desired results then we have to deploy our model in a real-time
                            environment this is where deployment comes into the picture.</p>
                        <div class="image-container">
                            <div class="image-placeholder" data-src="../assets/blogs/img/DataScience/machine-learning-1.gif">📷 IMAGE: <code>../assets/blogs/img/DataScience/machine-learning-1.gif</code> — Machine Learning GIF <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                        </div>
                        <br>
                        <br>
                        <hedding>Lets Make it more simpler</hedding>
                        <h3>Dividing it into three main artifacts</h3>
                        <ul>
                            <li>Data Engineering</li>
                            <br>
                            <li>Model development</li>
                            <br>
                            <li>Deployment</li>
                        </ul>
                        <br>
                        <h2 id="dataengineering">Data Engineering</h2>
                        <blockquote>
                            <p>Data pre-processing increases the quality of the data thus making it fit to be analyzed.
                                It minimizes errors, variations, and duplication, hence enhancing the possibility of
                                getting the right results. </p>
                            <cite>.</cite>
                        </blockquote>
                        <p>As raw data it is noisy, biased, incomplete, unstructured, and missing . so processing raw
                            data may throe errors, such that it is most important to pre process the data. poor data can
                            lead to incorrect prediction, lower accuracy etc.. maintaining the data quality is most
                            impotent to train any model.</p>
                        <div class="dropdown">
                            <div class="dropdown-title">Example</div>
                            <div class="dropdown-content">
                                <p>Why data pre processing is so important ? lets understand with an example , consider
                                    our task is to predict the attendance percentage of student by analyzing the
                                    previous 8 years.</p>
                                <strong>case 1:</strong>
                                <p>let say some students discontinued the school, some of them might skip the school for
                                    first few years.</p>
                                <strong>case 2:</strong>
                                <p>some data entry's are meaning less, over 100%.</p>
                                <strong>case 3:</strong>
                                <p>some data entry's are in the string format where it need to be int.</p>
                                <strong>case 4:</strong>
                                <p>we are having the data in sentences. where machine only understand binary or
                                    numerical data.</p>
                                <p>perfect prediction always demands perfect data, what are the issues with this data ,
                                    case 1 data is Missing, case 2 data contains outlier, case 3 data is invalid, case 4
                                    data is in sentence format, preprocessing is necessary to handle all cases</p>
                            </div>
                        </div>
                        <!-- <p>Why data pre processing is so impotent ? lets understand with an example , consider we are having a students details of attendance percentage of previous 8 years. so our task is to predict the attendance of next year. so we have to collect the data from previous 8 years. let say some students discontinued the school, some of them might skip the school for first few years. so what can be the preprocessing steps that can be performed on that particular data to have a perfect prediction? so, first we have to fill up the missing data(who joined after few years) then to remove the students who are not in the school right now this are necessary steps. Then we needed to convert the names into a machine understanding for mat such as bitty numbers , numerical numbers etc.. this are necessary to mark error less data processing. incomplete data always give errors.  </p> -->
                        <hedding>some of the preprocessing techniques include</hedding>

                        <ul>
                            <li>Cleaning</li>
                            <br>
                            <li>Data Augmentation</li>
                            <br>
                            <li>Dimensionality Reduction</li>
                            <br>
                            <li>Feature Engineering</li>
                            <br>
                            <li>Normalizing</li>
                            <br>
                            <li>Encoding</li>
                            <br>
                            <li>Scaling</li>
                        </ul>
                        <br>
                        <h2>Cleaning</h2>
                        <p>Data cleaning is a processing of filling up missing data, removing outliers or duplication
                            and so on.</p>
                        <al>Missing data</al>
                        <p>Handling with missing data can be done in different methods we can fill up the missing data
                            with mean, median or mode or removing whole record or using machine learning algorithms to
                            fill out those values</p>
                        <ul>
                            <li>mean/median/mode of entire data to fill up missing data</li>
                            <br>
                            <li>removing whole record</li>
                            <br>
                            <li>using machine learning algorithms to fill out missing data</li>
                        </ul>
                        <al>Handling outliers</al>
                        <p>outliers are something that deviates significantly from the rest of the data. which changes
                            the course oof the output</p>
                        <div class="dropdown">
                            <div class="dropdown-title">Example</div>
                            <div class="dropdown-content">
                                <p>presence of out layers cause the prediction to be less accurate, lets understand with
                                    an example we have 5 numbers [1,2,3,4] mean of this number is 2.3, consider we have
                                    [1,2,3,100] and the mean of this data is 26.5. so the mean is deviated from 2.5 to
                                    26.2 the reason being the vale 100 which is acting as a outliers</p>
                            </div>
                        </div>
                        <div class="image-container">
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/DataScience/MacheneLearningWorkFlow/outlayers 2.jpg">📷 IMAGE: <code>../assets/blogs/img/DataScience/MacheneLearningWorkFlow/outlayers 2.jpg</code> — fig 1 <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="image-description">fig 1 : Scatter plot</p>
                            </div>
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/DataScience/MacheneLearningWorkFlow/boxplot.png">📷 IMAGE: <code>../assets/blogs/img/DataScience/MacheneLearningWorkFlow/boxplot.png</code> — fig 2 <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="image-description">fig 2 : Box plot</p>
                            </div>
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/DataScience/MacheneLearningWorkFlow/outliers_2.png">📷 IMAGE: <code>../assets/blogs/img/DataScience/MacheneLearningWorkFlow/outliers_2.png</code> — fig 3 <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="image-description">fig 3 : Z score</p>
                            </div>
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/DataScience/MacheneLearningWorkFlow/Boxplot_vs_PDF.png">📷 IMAGE: <code>../assets/blogs/img/DataScience/MacheneLearningWorkFlow/Boxplot_vs_PDF.png</code> — fig 4 <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="image-description">fig 4 : Box plot vs PDF</p>
                            </div>
                        </div>
                        <al>Scatter plot</al>
                        <p>its a visual representation of the data(fig 1), where we can observe the distribution of the
                            data and detect outliers, sk learn provides some of the libraries to detect the outliers in
                            the scatter plot</p>
                        <p style="color: red">from sklearn.neighbors import LocalOutlierFactor</p>
                        <p style="color: red">from sklearn.ensemble import IsolationForest</p>
                        <al>Box plot(IQR)</al>
                        <p>A boxplot is a standardized way of displaying the dataset based on the <a
                                href="https://en.wikipedia.org/wiki/Five-number_summary">five-number summary :</a> the
                            minimum, the maximum, the sample median, and the first and third quartiles. refer <a
                                href="https://en.wikipedia.org/wiki/Box_plot">wiki</a></p>
                        <p><strong>IQR(Inter Quartile Range) :</strong>It is the difference between first and third
                            quatres. MIN and MAX are calculated based on IQR. we just remove the data points out side
                            MIN and MAX( outliers). fig 2</p>
                        <al>Z score</al>
                        <p>Z score is a statistic that provides a measure of how many standard deviations a data point
                            is away from the mean. statistically most 70% to 90% of the data is present at Mean(between
                            +1 and -1 of standard deviation). so the points far from mean are considered as outliers and
                            can be removed.</p>
                        <p><strong></strong> Z-score normalization</strong> refers to the process of normalizing every
                            value in a dataset such that the mean of all of the values is 0 and the standard deviation
                            is 1</p>
                        <strong>Z score = (value - mean)/standard deviation</strong>
                        <p>Fig 3 shows the standard normal distribution of the data by z score normalization</p>
                        <al>Invalid data</al>
                        <p>Using data standardization, you can identify and convert data from varying formats into a
                            uniform format. in some cases there might be junk values or invalid data in the dataset</p>
                        <strong>This can be removed by : </strong>
                        <p>you can apply standardization techniques to your data after you’ve collected it. This
                            involves developing codes to convert your dirty data into consistent and valid formats.</p>
                        <p>ex : String matching</p>
                        <h4>References</h4>
                        <p><a
                                href="https://towardsdatascience.com/ways-to-detect-and-remove-the-outliers-404d16608dba">https://towardsdatascience.com/ways-to-detect-and-remove-the-outliers-404d16608dba</a>
                        </p>
                        <p><a href="https://en.wikipedia.org/wiki/Box_plot">https://en.wikipedia.org/wiki/Box_plot</a>
                        </p>
                        <p><a
                                href="https://medium.com/@aashish.singh2k8/how-to-identify-and-remove-outliers-in-your-dataset-a-guide-for-data-scientists-57b07aea7fa8">https://medium.com/@aashish.singh2k8/how-to-identify-and-remove-outliers-in-your-dataset-a-guide-for-data-scientists-57b07aea7fa8</a>
                        </p>
                        <p><a
                                href="hhttps://www.scribbr.com/methodology/data-cleansing">https://www.scribbr.com/methodology/data-cleansing/</a>
                        </p>
                        <br>
                        <br>
                        <h2>Data Augmentation</h2>
                        <p>Data augmentation is the process of artificially generating new data from existing data,
                            primarily to train new machine learning (ML) models. ML models require large and varied
                            datasets for initial training</p>
                        <blockquote>
                            <p>Data augmentation uses pre-existing data to create new data samples that can improve
                                model optimization and generalizability.</p>
                            <cite>IBM</cite>
                        </blockquote>
                        <h3>Why Data Augmentation</h3>
                        <p>Machine Learning and Deep Learning Models relay on large data sets develop accurate models in
                            various contexts. Data Augmentation helps filling out missing values and increase the data
                            size by including variety of data. this helps in:</p>
                        <ul>
                            <li>
                                <p>improving model accuracy</p>
                            </li>
                            <li>
                                <p>Reduced data dependency (not being depending on larger data for training)</p>
                            </li>
                            <li>
                                <p>improving model robustness (Including data in such a way that it include all
                                    situations, such as noise and most unexpected situations to make model trained model
                                    strong)</p>
                            </li>
                            <li>
                                <p>Mitigate overfitting in training data</p>
                            </li>
                        </ul>
                        <p>Data augmentation can be applied when the training data is too small, when there is
                            overfitting in the datasets or if there is lot of missing variables in the datasets. the
                            augumentation can be applies in different areas such as <strong>image Augmentation,Text data
                                Augmentation and Audio Data augmentation </strong></p>

                        <h3>Data augmentation techniques</h3>
                        <dev class="image-container">
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/DataScience/MacheneLearningWorkFlow/DataAug.png">📷 IMAGE: <code>../assets/blogs/img/DataScience/MacheneLearningWorkFlow/DataAug.png</code> — --image title-- <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="p" class="image-description">Data Augmentation techniques</p>
                            </div>
                        </dev>
                        <al>Image Augmentation</al>
                        <ul>
                            <l>
                                <p><strong>Geometric Transformations</strong> - Scaling, Rotation, Translation,
                                    Shearing, Flipping, etc</p>
                            </l>
                            <l>
                                <p><strong>Color Transformations</strong> - Brightness, Contrast, Saturation, etc</p>
                            </l>
                            <l>
                                <p><strong>Quality Transformations</strong> - Blurring, Sharpening, Edge Detection</p>
                            </l>
                            <l>
                                <p><strong>Arithmetic</strong> - Adding images in different ways(imposing one on anther,
                                    adding it side by side, etcc..)</p>
                            </l>
                        </ul>
                        <div class="image-container">
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/DataScience/MacheneLearningWorkFlow/augu1.gif">📷 IMAGE: <code>../assets/blogs/img/DataScience/MacheneLearningWorkFlow/augu1.gif</code> — fig 1 <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="image-description"> </p>
                            </div>
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/DataScience/MacheneLearningWorkFlow/augu2.gif">📷 IMAGE: <code>../assets/blogs/img/DataScience/MacheneLearningWorkFlow/augu2.gif</code> — fig 2 <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="image-description"></p>
                            </div>
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/DataScience/MacheneLearningWorkFlow/augu3.gif">📷 IMAGE: <code>../assets/blogs/img/DataScience/MacheneLearningWorkFlow/augu3.gif</code> — fig 3 <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="image-description"></p>
                            </div>
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/DataScience/MacheneLearningWorkFlow/augu4.gif">📷 IMAGE: <code>../assets/blogs/img/DataScience/MacheneLearningWorkFlow/augu4.gif</code> — fig 4 <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="image-description"></p>
                            </div>
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/DataScience/MacheneLearningWorkFlow/augu5.gif">📷 IMAGE: <code>../assets/blogs/img/DataScience/MacheneLearningWorkFlow/augu5.gif</code> — fig 5 <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="image-description"></p>
                            </div>
                        </div>
                        <p> all the images over there are just created by using Data augmentation (multiple images using
                            single image), Visit <a href="https://github.com/aleju/imgaug">GitHub repo</a> for some
                            intreating Data augmentation techniques</p>
                        <p>python libraries for data augmentation</p>
                        <ul>
                            <li>
                                <p><strong>TenserFlow/Keras</strong> - Tf.image, Keras preprocessing layers, Keras
                                    ImageDataGenerator, keras.Sequential</p>
                            </li>
                            <li>
                                <p><strong>PyTorch/MxNet</strong> - torchvision.transfroms,
                                    mxnet.gluon.data.vision.transforms</p>
                            </li>
                            <li>
                                <p><strong>Scikit-Learn</strong> - ImageDataGenerator</p>
                            </li>
                            <li>
                                <p><strong>Augmentor</strong></p>
                            </li>
                            <li>
                                <p><strong>Albumentations</strong></p>
                            </li>
                            <li>
                                <p><strong>OpenCV</strong><a
                                        href="https://medium.com/analytics-vidhya/data-augmentation-techniques-using-opencv-657bcb9cc30b"
                                        style="color: #0056b3;"></a></p>
                            </li>
                            <li>
                                <p><strong>AutoAugment (DeepAugment)</strong> <a
                                        href="https://github.com/barisozmen/deepaugment" style="color: #0056b3;">GitHub
                                        repo</a></p>
                            </li>
                            <li>
                                <p><strong>Imgaug</strong> - <a href="https://github.com/aleju/imgaug"
                                        style="color: #0056b3;">GitHub repo</a></p>
                            </li>
                        </ul>
                        <p><a href="https://github.com/NVlabs/DG-Net/tree/master">Image Augmentation all codes</a></p>
                        <p>
                            <a href="https://arxiv.org/pdf/1805.09501"
                                style="color: #0056b3;">https://arxiv.org/pdf/1805.09501</a>
                        </p>
                        <p><a href="https://neptune.ai/blog/data-augmentation-in-python"
                                style="color: #0056b3;">https://neptune.ai/blog/data-augmentation-in-python</a></p>
                        <p><a href="http://ai.stanford.edu/blog/data-augmentation/"
                                style="color: #0056b3;">http://ai.stanford.edu/blog/data-augmentation/</a></p>
                        <p><a href="https://www.datacamp.com/tutorial/complete-guide-data-augmentation"
                                style="color: #0056b3;">https://www.datacamp.com/tutorial/complete-guide-data-augmentation</a>
                        </p>
                        <p><a href="https://github.com/aleju/imgaug"
                                style="color: #0056b3;">https://github.com/aleju/imgaug</a></a></p>
                        <p><a href="https://github.com/barisozmen/deepaugment"
                                style="color: #0056b3;">https://github.com/barisozmen/deepaugment</a></a></p>
                        <p><a href="https://github.com/keras-team/keras-preprocessing"
                                style="color: #0056b3;">https://github.com/keras-team/keras-preprocessing</a></a></p>
                        <p><a href="https://neptune.ai/blog/data-augmentation-in-python"
                                style="color: #0056b3;">https://neptune.ai/blog/data-augmentation-in-python</a></p>
                        <p></p>
                        <al>Text Augmentation</al>
                        <p>Text augmentation is the process of artificially generating new text from existing text,
                            primarily to train machine learning (ML) models or NLP models. The fields like computer
                            vision and natural language processing require large and varied datasets for initial
                            training. Making the dataset more robust and generalizable improves the performance of the
                            model. There are various text augmentation techniques that can be applied to improve the
                            performance of the model. Majorly text augmentation input replacing , adding, removing,
                            shuffling, etc. lets see some of the text augmentation techniques.</p>
                        <SS>Most widely used text augmentation techniques are as follows</SS><br><br>
                        <dev class="image-container">
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/DataScience/MacheneLearningWorkFlow/textaug.png">📷 IMAGE: <code>../assets/blogs/img/DataScience/MacheneLearningWorkFlow/textaug.png</code> — --image title-- <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="p" class="image-description">fig 1 : Artificial Neural Network</p>
                            </div>
                        </dev>
                        <SS>Word2vec-based augmentation</SS>
                        <p>-- (Semantic Similarity Augmentation) the word is replaced with the word with close value in
                            the embeddings. this required a pretrained word embedding models or the data is big enough
                            to build a embedding model. implemented by fasttext and word2vec</p>
                        <SS>WordNet-based augmentation</SS>
                        <p>-- (Synonym replacement) this approach divides the sentence into verbs and nouns and replaces
                            the nouns with their respective synonyms. the synonyms are generated using WordNet(a popular
                            lexical database).</p>
                        <SS>RTT-based augmentation</SS>
                        <p>(Round Trip Translation RTT) this approach takes a sentence and translates it into another
                            language and then translates it back to the original language. this can be implemented using
                            textaugment or google translate api.</p>
                        <SS>Easy data augmentation (EDA)</SS>
                        <p>This include some of the operations such as Synonym replacement, random deletion,random
                            insertion, random swap, etc </p>
                        <SS>An easier data augmentation (AEDA)</SS>
                        <p>Random insertion of punctuations and special characters</p>
                        <SS>Mixup augmentation</SS>
                        <p>The technique is quite systematically named. We are literally mixing up the features and
                            their corresponding labels. we are creating new virtual dataset from the training data set
                            by mixing up the features and their corresponding labels. the implementation is basically
                            creating a NN model making it generate a new input and a new output labels.</p>
                        <p><a href="https://github.com/makcedward/nlpaug">nlpaug GitHub repo</a></p>
                        <p><a href="https://keras.io/examples/vision/mixup/">MixUp</a></p>
                        <p><a href="https://arxiv.org/pdf/1907.03752">Text Augmentation</a></p>
                        <p><a href="https://pypi.org/project/textaugment/">PyPy textaugment</a></p>
                        <p><a href="https://github.com/dsfsi/textaugment/tree/master">Implementation</a></p>
                        <al>Audio Augmentation</al>
                        <p>Audio recognition systems such as Google assistant, Alexa, Amazon Echo etc.. are developed on Audio data and detecting more complex audios is a challenge. as people are more interested into voice assistants it is more important to detect the audio form most complex environments such as noisy, low audio, multiple audios etc.. The systems only achieve this complex tasks by making it to train through such data sets. But collecting such datasets needs lot of human effort. Hence this is where data augmentation comes to rescue. By using this techniques we can build more robust and large datasets to make detection more accurate.</p>
                        <SS>Audio Augmentation techniques</SS>
                        <ul>
                            <li>Noise injection</li>
                            <li>Time shift</li>
                            <li>Time stretching</li>
                            <li>Random cropping</li>
                            <li>Pitch scaling</li>
                            <li>Dynamic range compression</li>
                            <li>Simple gain</li>
                            <li>Equalization</li>
                            <li>Voice conversion (Speech)</li>
                        </ul>
                        <SS>Background noice</SS><br>
                        <div class="image-container">
                            <div class="image-item">
                                <div class="image-placeholder">🔊 AUDIO PLACEHOLDER (replace later)</div>
                                <p class="image-description">Fig 1: original</p>
                            </div>
                            <div class="image-item">
                                <div class="image-placeholder">🔊 AUDIO PLACEHOLDER (replace later)</div>
                                <p class="image-description">Fig 1: Transformed</p>
                            </div>
                        </div>
                        <SS>Gaussian noise</SS><br>
                        <div class="image-container">
                            <div class="image-item">
                                <div class="image-placeholder">🔊 AUDIO PLACEHOLDER (replace later)</div>
                                <p class="image-description">Fig 1: original</p>
                            </div>
                            <div class="image-item">
                                <div class="image-placeholder">🔊 AUDIO PLACEHOLDER (replace later)</div>
                                <p class="image-description">Fig 1: Transformed</p>
                            </div>
                        </div>
                        <p><a href=https://iver56.github.io/audiomentations>audiomentations</a>-- this is a library provided by python</p>
                        <p><a href="https://www.tensorflow.org/io/tutorials/audio">TenserFlow</a></p>
                        <p><a href="https://pytorch.org/audio/2.0.1/tutorials/audio_data_augmentation_tutorial.html">PyTorch</a></p>
                        <p><a href="https://www.mathworks.com/help/audio/ref/audiodataaugmenter.html">Using MathLab</a></p>
                        <al>Time Series Data Augmentation </al><br>
                        <p>Time Series Data is basically known as sequence of data points over a period of time. We basically observe this kind of data in Stock market and IOT applications. Treating this data to be Augmented as the previous three techniques cause problem. Because previous every record is concorded as the individual data points. But we need to treat a sequence of data points as a single data point in timeseries. Time series data augmentation follows its suppurate techniques. Such as GAN(Generative Adversarial Network) and Autoencoders. </p>
                        <p><SS>Traditional algorithms</SS> this techniques can tbe applied directly to time series data. instead we divide the entire data into a group of time stramps. then applying then applying to one of them or some of them and then adding it to original data set results in increase in size of data.. it can also be said that some of them does not support so being selective would be effective.</p>
                        <ul>
                            <li>time scaling window</li>
                            <li>jittering</li>
                            <li>Rotation</li>
                            <li>Channel permutation</li>
                            <li>wrapping</li>
                        </ul>
                        <div class="image-container">
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/DataScience/MacheneLearningWorkFlow/GAN.png">📷 IMAGE: <code>../assets/blogs/img/DataScience/MacheneLearningWorkFlow/GAN.png</code> — fig 1 <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="image-description">GAN(Generative Adversarial Network)</p>
                            </div>    
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/DataScience/MacheneLearningWorkFlow/AutoEncoder.png">📷 IMAGE: <code>../assets/blogs/img/DataScience/MacheneLearningWorkFlow/AutoEncoder.png</code> — fig 1 <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="image-description">Virtual autoencoder</p>
                            </div>
                        </div>
                        <al>GAN(Generative Adversarial Network)</al>
                        <p>Gan architecture is based on the computation between two Neural Networks known to be generator and discriminator. the generator is used to generate fake data and the discriminator is used to differentiate between real and fake data. the whole task is to fool the discriminator. in this way we have more data points. in case of time series data, we can use this technique to generate data points that are similar to the original data points for a particular period of time.</p>
                        <al>Virtual autoencoder</al>
                        <p>This is a Encoder and decoder architecture. Majorly used in unSupervised learning where there is no labels. So here we use the encoder to make the input datapoints into smaller dimensions and decoder to make it back to original. so here we are basically generating new data points by making it generate back the original data.</p>
                        <p><a href="https://arxiv.org/pdf/2206.13508">Time series data augmentation</a></p>
                        <p><a href="https://github.com/jsyoon0823/TimeGAN/tree/master?tab=readme-ov-file"> Code github repo</a></p>
                        <p><a href="https://saturncloud.io/glossary/data-augmentation-with-generative-ai/">Gen AI Data Augmentation</a></p>
                        <p><a href="https://aws.amazon.com/what-is/gan/">AWS GAN</a></p>
                        <h2>Dimensionality reduction</h2>
                        <P>Dimensionality reduction is a technique to reduce the number of feature in the dataset. Basically higher the number of feature slower the model will be and model leads to overfitting. the data fits well on the training data but fails to generalize well on new or testing data. The main aim of the Dimensionality reductions is get more information out of the entire data into fewer features and also to remove the features that has no/less effect on the model. We apply Dimensionality reduction to make model faster ,reduce complexity and improve performance.</P>
                        <p>Dimensionality reduction is a technique which selects or extracts completely independent features that has the maximum impact on the model.</p>
                        <p>Having more features results in high dimensional visualization which is hard to interpret and generalize. which may results in complex model formation</p>
                        <p> For Dimensionality reduction there are two main approaches  <SS>Feature Extraction</SS>,<SS>Feature Selection</SS></p>
                        <p><SS>Feature Extraction : </SS> It involves creating new features from original by combining or transforming exiting features. the ogle is to create a set of d feature form n features (d<=n) such that d features capture the essence of the n features</p>
                        <p>Some of the feature extraction techniques are as follows<SS>Principal Component Analysis(PCA),Singular Value Decomposition(SVD),Linear Discriminant Analysis(LDA) etc..</SS></p>
                        <p><SS>Feature Selection : </SS> It involves selecting a subset of features from the original set of features. the goal is to select a subset of features that are most relevant and can have the maximum information content</p>
                        <p>Some of the feature selection techniques are <SS>Filter methods</SS>,<SS>Wrapper methods</SS>,<SS>Embedding method</SS></p>
                        <div class="image-container">
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/DataScience/MacheneLearningWorkFlow/DR1.png">📷 IMAGE: <code>../assets/blogs/img/DataScience/MacheneLearningWorkFlow/DR1.png</code> — fig 1 <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="image-description">Dimensionality reduction</p>
                            </div>    
                        </div>
                        <al>Principal component analysis (PCA)</al>
                        <p>Principal component analysis is a Feature Extraction technique where Higher dimensional data is transformed into lower dimensional data with the most important information. here we are using covariance matrix to higher dimensional and getting eigen vector and racking the eigen values to select the eigen vectors . this is most effective reduction technique as it uses the covariance matrix which gives the correlation between the feature. </p>
                        <p>Before we get started, we shall take a quick look at the difference between covariance and variance. Variance measures the variation of a single random variable (like the height of a person in a population), whereas covariance is a measure of how much two random variables vary together (like the height of a person and the weight of a person in a population). The formula for variance is given by</p>
                        <p>$$\\sigma^2_x = \\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2$$</p>
                        <p>and the formula for covariance is given by</p>
                        <p>$$cov(x,y) = \\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})$$</p>
                        <p><SS>Covariance : </SS>where x and y are two random variables, n is the number of observations, and x_i and y_i are the values of the random variables at observation i.so we are considering two features x and y from a set of features in the dataset and finding covariance between each pair of features which represents how this features vary together. <a>$$\\text{Covariance varies between } -\\infty \\text{ and } \\infty$$</a> which means cov(x,y) > 0 employs features related in same direction, cov(x,y) < 0 represents features releated in opposite direction and cov(x,y)=0 represents independent features. if the number of fetures are n then we form the matrix of size n x n by finding the covarince between each pair.</p>
                        <p>$$\\text{Covariance matrix}=\\begin{bmatrix} \\sigma_{xx} &amp; \\sigma_{xy} \\\\ \\sigma_{yx} &amp; \\sigma_{yy} \\end{bmatrix}$$</p>
                        <p><a href="https://byjus.com/maths/covariance/">know more</a></p>
                        <p><SS>Eigan values and Eigan vectors :</SS>Here we use Eigan values and Eigan vectors to reduce the Dimensionality of the covariance matrix. It helps in finding the important information out of all features in lower dimensional space. ⋋ represents Eigan value and X represents Eigan vector. ⋋ ranks the Eigan vectors such that higher the rank the more information the Eigan vector posses, Eigan vectors are the set of independent vectors.</p>
                        <p>$$Ax=\\lambda x$$</p>
                        <p>$$(A-\\lambda I)x=0$$</p>
                        <p>$$det(A-\\lambda I)=0$$</p>
                        <p> we can find the eigen values and eigen vectors using this mathematically, for more info <a href="https://byjus.com/jee/eigenvalues-and-eigenvectors-problems-and-solutions/">Vist</a></p>
                        <p><SS>Programmatically</SS></p>
                        <div class="code-box" id="codeBox"><button class="copy-btn" onclick="copyCode()">Copy</button>
                            <pre><code  class="language-python">import numpy as np
import pandas as pd
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

# Sample data
data = {
    'Feature1': [2.5, 0.5, 2.2, 1.9, 3.1, 2.3, 2.0, 1.0, 1.5, 1.1],
    'Feature2': [2.4, 0.7, 2.9, 2.2, 3.0, 2.7, 1.6, 1.1, 1.6, 0.9],
    'Feature3': [100, 102, 98, 101, 97, 105, 100, 104, 101, 102]
}
df = pd.DataFrame(data)

# Standardizing the data
scaler = StandardScaler()
scaled_data = scaler.fit_transform(df)

# Applying PCA
pca = PCA(n_components=2)
principal_components = pca.fit_transform(scaled_data)

# Creating a DataFrame with the principal components
pca_df = pd.DataFrame(data=principal_components, columns=['Principal Component 1', 'Principal Component 2'])

print(pca_df)</code></pre></div>
                        
                        <p><SS>Standardizing</SS> basically transforms the data into a normal distribution, such that every feature has a mean of 0 and a standard deviation of 1 (making the values closer to 0), this ensures all features contribute equally. the features with large or small values are normalized ensuring every feature is on the same scale. <SS>This step is very essential before applying PCA</SS></p>
                        <p> Here 3 features are transformed to 2 features by selecting n_components=2 as a hyperparameter.</p>
                        <p></p>
                        <h2>Model development</h2>
                        <p></p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <h2>Deployment</h2>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                    `,
  "your-companion": `
                        <h2 id="machenelearning">Introduction</h2>
                        <p>Your companion is an AI chatbot, which is built for a portfolio website. the working of chatbot involve gathering the user information by asking the questions like "your good name?" and "describe your purpose?", then information is sent AWS Dynamodb through API GateWay and AWS Lambda. then the additional Questions from the user with the information user provided initially which is also is stored in a short term memory is then sent as input to Amazon titan LLM From Bedrocks by using Langchain. then LLM process process the input then response is displayed on the chatbot.</p>
                        <p>Every thing until this is fine and works well on our local system. but real challenge occurs when we need to present the same thing to public Webpage. so here is where the Aws comes into picture and we need to deploy our chatbot in a real-time environment. firstly AWS Bedrocks and Langchain needs to be implemented with Fast API. then here comes Docker where a Docker image is bult for Fast API application . then this Docker Image is deployed into EC2 instance which is running on AWS. the public url given by EC2 then integrated to API gateway so we can push and get response. then API gateway deployed URL is then used in frontend application, to get responses. coming to the data storage this is basically through AWS Lambda and Dynamodb. Where API gateway link is generated to AWS Lambda and DynamoDB integration and used in frontend application.</p>
                        <div class="image-container">
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/chatbotblog/chatbotworkflow.png">📷 IMAGE: <code>../assets/blogs/img/chatbotblog/chatbotworkflow.png</code> — fig 1 <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="image-description">fig 1 : work flow</p>
                            </div>
                        </div>
                        <h2 id="Langchain&AmazonTitan">Langchain and Amazon Titan</h2>
                        <p>Langchain is a framework that allows users to build applications with LLMs. It's collection of tools simples building generative AI applications featuring access to multiple LLMs like OpenAI, Huggingface, Bedrocks, Lalma etc.</p>
                        <h4>Features of Langchain</h4>
                        <ul>
                            <li><p>Model interaction</p></li>
                            <li><p>Data storage and retrieval</p></li>
                            <li><p>Memory</p></li>
                            <li><p>Agents</p></li>
                            <li><p>chains</p></li>
                        </ul>
                        <a href="https://github.com/langchain-ai/langchain"><p style="color: #007bff;">Have a look at this for more information</p></a>
                        <h4>Role of langchain</h4>
                        <p>As Lanchain simplifies accesing llm's, such that i am using langchain to access <strong style="color: #007bff;"><a href="https://aws.amazon.com/bedrock/">Bedrocks</a></strong> . Bedrocks is a service provided by AWS where we host and find pretrained LLM's. we are using <strong style="color: #007bff;"><a href="https://aws.amazon.com/bedrock/amazon-models/titan/">Amazon Titan</a></strong> as our LLM for this project. AmazonTitan is a popular LLM which is Trained on wide range of data, we can use it as out GPT. For a over view Langchin allows you to access LLM/s present in the Bedrocks so we are choosing Amazon Titan.</p>

                        <div class="code-box" id="codeBox"><button class="copy-btn" onclick="copyCode()">Copy</button>
<pre><code  class="language-python">from langchain.llms.bedrock import Bedrock

model = Bedrock(
    credentials_profile_name="default",  # AWS credentials profile
    region_name="us-east-1",
    model_id="amazon.titan-text-premier-v1:0",  # Amazon Bedrock model
    model_kwargs={
        "temperature": 0.9,
    },
)
response = custom_llm.invoke(input="What is the recipe of mayonnaise?")
print(responce)
</code></pre></div>
                        <p>Som people might not have AWS account and find it vary difficult to access Bedrocks. so we can also use <a href="https://huggingface.co/blog/langchain"><strong style="color: #007bff;">Huggingface & Langchain</strong></a> intigration this is more simpler approach or we canalso impliment Some of the populer LLMs like OpenAi and Lalma directly from langchiain. vist <a></a> directly from here <a href="https://github.com/langchain-ai/langchain/tree/master/docs/docs/integrations/llms"><strong style="color: #007bff;">Langchain Intigrations</strong></a></p>
                        <p>Make sure you visit <a href="https://github.com/langchain-ai/langchain/tree/master/docs/docs/integrations/llms" style="font-size: 25px; color: #007bff;">Here</a>. every integration is documented</p>
                        <p>**Before you run the code AWS credentials needs to be connected, the reason behand <strong>credentials_profile_name=default</strong> is the credentials are already stored in a default profile and to do that follow <a href="https://medium.com/@simonazhangzy/connect-vs-code-to-aws-87e274e5cd4" style="color: #007bff; font-size: 20px;">this steps</a> this can also help you if you what to access more bedrocks models</p>
                        <p><strong> model_id="amazon.titan-text-premier-v1:0"</strong> i am using Amazon Titan but you can use any other LLMs. you just need to change the model_ID and a list of different model ids are available in <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html" style="font-size: 20px; color: #007bff;">Here</a> you can chose from pool of different LLMs.</p>
                        <p>model_kwargs are Hyper parameters for the model. where we can able adjust the temperature, max_tokens, min_tokens.stop_sequence etc..</p>
                        <p><SS>custom_llm.invoke(input="What is the recipe of mayonnaise?")</SS> you can change the input as you want to get the response accordingly.</p>
                        <h2 id="fastAPI">FAST API</h2>
                        <blockquote>
                            <p>FastAPI is a modern, high-performance web framework for building APIs with Python 3.7+ based on standard Python type hints</p>
                            <cite>FastAPI</cite>
                        </blockquote>
                        <p>as we seen earlier we are using LangChain and Titan integration get the responses to our prompts which are sent using python. But for any Realtime projects it has to be sent through an webpage but though webpage we cant directly access this all code manually. as webpage uses HTML/CSS and we use python for communication. this is where <SS>API</SS> comes into picture. API's can be accessed through any platforms such as HTML/JS/react to post and get the information. API is not a code it is a link that can be accessed easily.</p>
                        <p>I am using FastAPI for building an API for the Langchain & Bedrocks integration. if we give the input as a prompt to the API then it will give us back the output. this pigmentation is done using <SS>Fast API</SS>.</p>
                        <p><SS>Fast API</SS> gives you lot of flexibility to build high performing API's in user most easy implementation techniques for production environments. </p>
                        <div class="code-box" id="codeBox"><button class="copy-btn" onclick="copyCode()">Copy</button>
                            <pre><code  class="language-python">from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain.llms.bedrock import Bedrock
import uvicorn


app = FastAPI()


app.add_middleware(
    CORSMiddleware,#0563bb90
    allow_origins=["*"],  # Replace "*" with specific allowed origins in production
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods, including OPTIONS
    allow_headers=["*"],  # Allow all headers
)


def demo_chatbot():
    model = Bedrock(
        credentials_profile_name="default",  # AWS credentials profile
        region_name="us-east-1",
        model_id="amazon.titan-text-premier-v1:0",  # Amazon Bedrock model
        model_kwargs={
            "temperature": 0.9,
            # "max_tokens_to_sample": 50,
            # "stop": ["\\n\\n\\n"]
        },
    )
    return model

# Define the request schema
class ChatRequest(BaseModel):
    message: str

# Define the chat endpoint
@app.post("/chat")
async def chat(chat_request: ChatRequest):
    print(chat_request)
    user_message = chat_request.message
    if not user_message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty.")

    try:
        # Generate a response from the chatbot model
        model = demo_chatbot()
        response = model.predict(user_message)
        return {"reply": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

# Health check endpoint
@app.get("/")
async def read_root(request: Request):
    return {"message": "Hello, World!"}



if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5000) </code></pre></div>
                        <p><SS>demo_chatbot</SS> is a function used to access the <SS>AmazonTitan</SS> model. which is previously explained already</p>
                        <p> as you run the code and your server is running on  <SS>http://127.0.0.1:5000/</SS> and it is the home address of your server, but your chat bot is actually running on <SS>http://127.0.0.1:5000/chat</SS> where you can post the request and get the response. because as you look at the code the function demo_chatbot() is being called in the route <SS>@app.post("/chat")</SS> and this route is handling the POST request.</p>
                        <p><ss>app.add_middleware</ss> this is one of the most important step when you are using the API for real time deployment. because it allows all the origins, methods and headers. it basically allows you to make cross-origin requests.</p>
                        <p><SS>ChatRequest(BaseModel)</SS> pydantic is one of the Special library that is used to validate the data that is being sent to the API. that means it make sure that the data is in the correct format. in our case it has to be string.</p>
                        <p><SS>async def</SS> if you would like to know the difference the difference between def and async def , its vary simple async def parallelly process the requests you make and def serially process the requests. understand it with an - <a href="https://fastapi.tiangolo.com/async/"><al> interesting example</al> </a>. and rest is just behave as a function witch return the model response by calling demo_chatbot</p>
                        <div class="image-container">
                            <div class="image-item">
                                <div class="image-placeholder">🎬 VIDEO PLACEHOLDER (original embedded a video — replace later)</div>
                                <p class="image-description">Follow the steps</p>
                            </div>
                        </div>
                        <SS>This is one way of testing your Fast API, else you can also follow this code to test if the API is perfectly running</SS>
                        <div class="code-box" id="codeBox"><button class="copy-btn" onclick="copyCode()">Copy</button>
<pre><code  class="language-python">import requests
url = 'http://127.0.0.1:5000/chat/'
data = {'message': "hello, how are you"}
# headers = {'Content-type': 'application/json'}
response = requests.post(url, json= data)
print(response.content)
</code></pre></div>
                        <p>If You could get a response, that means your Fast API is working fine and you built an API for your local system. you could not share the link/IP you got by running the python code. because it is your local computer IP address. just you can access because it is running on your local system. to make it access by public computer it needs to be running on the cloud. to do this we need to dockerize the fast api file and deploy it on the cloud and make it run always. so that every one can access it.</p>
                        <h2 id="Docker">Docker Image & Container</h2>
                        <blockquote>
                            <p>Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. </p>
                            <cite>Wikipedia</cite>
                        </blockquote>
                        <br>
                        <p>lets simplify it, so as i said you when you are running a python code it gives you the output according to what ever function your python code is written for , it might be regarding a machine learning library(sciket learn), or a numpy, pandas for data processing. so how this is done, fist if you want to use a machine learning library you need to install it on to your machine then write a python code to give the input and get the output. that is how you can perform functions on your machine. But when it comes to real time deployment you are not only representing it on your machine but also public machines, but we dont know if the public machine has that particular library installed. so it is our task to make sure that every one could get the results. this is when docker comes into picture, docker provides you a virtual machine (os, this is the machine that is hosted on the cloud) where you can install all the requirements and the instructions to get the outputs when they give the input. you just need to ask the Virtual Machine that is hosted on the cloud.</p>
                        <p><SS>What are this instructions ?</SS> Instructions are basically the commands you are writing on a dockerFile. that include to use this particular base image (in our case python), to install some set of library's, to run some code and lot more .</p>
                        <a href="https://docs.docker.com/reference/dockerfile/">All Instructions</a>
                        <p><ss>Docker file</ss> is a text file that contains instructions to build an image. Instructs are what all include and what all operations to perform.</p>
                        <a href="https://blog.devopscommunity.in/dockerfile-simplified-how-to-make-your-own-dockerfile">Dockier File format</al></a>
                        <p><SS>Docker Image</SS> is a template that contains the instructions to build a container. we build a image through the instructions. image contain all the installed packages all the files to be executed.</p>
                        <p><SS>Container</SS> is a running instance of a docker image. it will do what all our python code needs to be done.</p>
                        <SS>Make sure your files are arranged in this way</SS>
                        <div class="code-box" id="codeBox"><button class="copy-btn" onclick="copyCode()">Copy</button>
                        <pre><code  class="language-python">project-root/
    ├── app/
    │   └── app.py
    ├── Aws/
    │   ├── config.json
    │   ├── credentials.json
    ├── requirements.txt
    ├── .dockerignore
    └── Dockerfile  
                            </code></pre></div>
                            <p>requirements.txt can be extracted by running <SS>pip freeze > requirements.txt</SS> command in your project directory</p>
                            <center><SS style="color: #007bff;">Requirements.txt</SS><SS> --    for this project this are all you need to be install</SS></center>
                            <div class="code-box" id="codeBox"><button class="copy-btn" onclick="copyCode()">Copy</button>
                                <pre><code  class="language-python">fastapi==0.95.1
uvicorn[standard]==0.22.0
pydantic==1.10.2
langchain[community]==0.0.196
boto3==1.28.57
botocore==1.31.57</code></pre></div>
                            <center><h3 style="color: #007bff;">.dockerignore</h3>-<SS>this are some thing that has to be ignore while creating the image</SS></center>
                            <div class="code-box" id="codeBox"><button class="copy-btn" onclick="copyCode()">Copy</button>
                                <pre><code  class="language-python">__pycache__
*.pyc
*.pyo
*.pyd
*.db
*.sqlite3</code></pre></div>
                            <p>What ever the now the fast api code is written it will be stored in app.py. and one change need to make <SS>"replace host="127.0.0.1" with host="0.0.0.0""</SS> as we need to deploy it for production environment. 0.0.0.0 is the public IP address which allow traffic from any IP address.</p>

                            <center><h3 style="color: #007bff;">Dockerfile</h3></center>
                            <div class="code-box" id="codeBox"><button class="copy-btn" onclick="copyCode()">Copy</button>
                            <pre><code  class="language-python"># Use a base Python image
FROM python:3.9-slim

# Set environment variables
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# Set the working directory inside the container
WORKDIR /code

# Copy the requirements file into the container
COPY requirements.txt .

# Install project dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

COPY .aws /root/.aws
# Expose the port your FastAPI app will run on
EXPOSE 5000

# Command to run your FastAPI app with uvicorn
CMD ["uvicorn", "app.app:app", "--host", "0.0.0.0", "--port", "5000"]</code></pre></div>
                        <p><SS>FROM python:3.8-slim</SS> This command sets the foundation for the build. python:3.8-slim is a lightweight version of the Python 3.8 image, optimized for size and speed. Using this slim image reduces the overall size of your Docker image, leading to quicker downloads and less surface area for security vulnerabilities. This is particularly useful for a Python-based application where you might not need the full standard Python image.</p>
                        <p><SS>ENV PYTHONUNBUFFERED 1</SS> This command sets the environment variable PYTHONUNBUFFERED to 1. This is often used in Docker containers to ensure that Python's output is not buffered, which can lead to unexpected behavior.</p>
                        <p><SS>WORKDIR /code</SS> now code is our current working directory, what ever we copy will go into folder code</p>
                        <p><SS>COPY requirements.txt .</SS> copy the requirements file into the current working directory</p>
                        <p><SS>RUN pip install --no-cache-dir -r requirements.txt</SS> install the dependencies from the requirements file. --no-cache-dir is used to avoid caching the dependencies in the container. -r is used to specify the requirements file path.</p>
                        <p><SS>COPY . .</SS> copy the rest of the application code into the current working directory</p>
                        <p><SS>COPY .aws /root/.aws</SS> copy the aws credentials into the containers root directory( which is environment variable)</p>
                        <p><SS>EXPOSE 5000</SS> expose the port 5000 which is used by the FastAPI app</p>
                        <p><SS>CMD ["uvicorn", "app.app:app", "--host", "0.0.0.0", "--port", "5000"]</SS> command to run your FastAPI app with uvicorn</p>
                        <p>Install Docker Desktop if you don't have it. make sure you open the docker application to make the engine work</p>
                        <div class="code-box" id="codeBox"><button class="copy-btn" onclick="copyCode()">Copy</button>
                            <pre><code  class="language-python">docker build -t "name of your choice" .</code></pre></div>
                            <p>. represents the current directory where the Dockerfile is located</p>
                            <div class="code-box" id="codeBox"><button class="copy-btn" onclick="copyCode()">Copy</button>
                                <pre><code  class="language-python">docker container run --name "name container" -d -p 5000:5000 "image name"</code></pre></div>
                            <p>port needs to be same as what you specified in your docker file</p>
                            <SS>if you open docker desktop you will see your container running, this is the indication of successful deployment of docker image. this can be used for production environment.</SS>
                            <br>
                            <br>
                        <h2 id="EC2deployment">EC2 deployment</h2>
                        <blockquote>
                            <p>Amazon Elastic Compute Cloud (EC2) is a part of Amazon's cloud-computing platform, Amazon Web Services (AWS), that allows users to rent virtual computers on which to run their own computer applications. </p>
                            <cite>Wikipedia</cite>
                        </blockquote>
                        <p>Understand the term Virtual Machine, it is kind of Computer that is running on cloud with the operating system( Linex, Ubuntu, Windows wtc..) we want to use, amount of storage(500MB, 1GB) we required, kind of memory(8GB,16GB CPU,GPU) we want and lot more. and we can rent those virtual machines. this is what AWS EC2 provides. EC2 allows us to run a virtual machine with required configurations on the cloud. In our case VM is used for running Docker container which we just created.</p>
                        <al>steps to deploy on EC2</al>
                            <p><SS>Host your docker image</SS> : This can be made through Docker Hub or by uploading it to Amazon ECR (Elastic Container Registry). I recomend Docker Hub because it is free and easy to use and it doesn't charge you anything for your one private instance.</p>
                            <p> Pushing your image into the dockerHub, you need to login to dockerHub and then push the image. <SS>Cret a private repository <a href="https://hub.docker.com/repository/create?">Here</a></SS> then push the image. <a href="https://dev.to/s3cloudhub/push-docker-images-to-docker-hub-directly-using-cli-a-complete-guide-2ep0">Follow this instructions.</a></p>
                            <p> then you can view your image in dockerHub <a href="https://hub.docker.com/repositories/">Here</a></p>
                            <p><SS>Then creating EC2 Instance</SS> : You need to create an EC2 instance and run the container on it. To do this first of all, allocate the resources for your instance. this includes..</p>
                            <SS>Choose AMI -- Amazon Linux</SS>
                            <br>
                            <SS>Choose Instance Type -- t2.micro</SS>
                            <br>
                            <SS>Key pairs -- creat and store it safely</SS>
                            <br>
                            <SS>Networking( creating security group) -- allow all the traffic (SSH, HTTP,HTTPS)</SS>
                            <br>
                            <SS>Add Storage - default</SS>
                            <br>
                            <SS>Review</SS>
                            <br>
                            <SS>Launch Instance</SS>
                            <br>
                            <p><a href="https://dev.to/s3cloudhub/push-docker-images-to-docker-hub-directly-using-cli-a-complete-guide-2ep0">Follow this instructions</a></p>
                        <p> done - now your instance is up and running in few minutes</p>
                        <p> now connecting the instance then installing the docker on the instance, then running the pulling out the docker from the dockerHub then running the container on the instance.</p>
                        <div class="image-container">
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/chatbotblog/connect docker.png">📷 IMAGE: <code>../assets/blogs/img/chatbotblog/connect docker.png</code> — fig 1 <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="image-description">fig 1 : connect</p>
                            </div>
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/chatbotblog/connect docker 2.png">📷 IMAGE: <code>../assets/blogs/img/chatbotblog/connect docker 2.png</code> — fig 1 <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="image-description">fig 2 : connect to the instance</p>
                            </div>
                        </div>
                       <center> <al>Now installing the docker on the instance</al></center>
                        <div class="code-box" id="codeBox"><button class="copy-btn" onclick="copyCode()">Copy</button>
                            <pre><code  class="language-python">sudo yum update -y
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker</code></pre></div>
                        <center><al>Login to your docker to pull the image</al></center>
                        <div class="code-box" id="codeBox"><button class="copy-btn" onclick="copyCode()">Copy</button>
                            <pre><code  class="language-python">docker login</code></pre></div>
                        <center><al>Pull the docker Image from the dockerHub</al></center>
                        <div class="code-box" id="codeBox"><button class="copy-btn" onclick="copyCode()">Copy</button>
                            <pre><code  class="language-python">docker pull "repo_name":latest</code></pre></div>
                        <center><al>This command will make docker container run always until the instance is running</al></center>
                        <div class="code-box" id="codeBox"><button class="copy-btn" onclick="copyCode()">Copy</button>
                            <pre><code  class="language-python">docker run -d -p 5000:5000 --restart always "repo_name":latest</code></pre></div>
                        <center><al>Check the status of the container</al></center>
                        <div class="code-box" id="codeBox"><button class="copy-btn" onclick="copyCode()">Copy</button>
                            <pre><code  class="language-python">docker ps</code></pre></div>
                        <p> key Importence is that the port needs to be same as what you specified in your docker file, the security group you need to allow all the traffics form your device,HTTP and HTTPS. 0.0.0.0 indicates that you are allowing traffic form the internet. now your container is running on the instance (this is same as the fast API running on your device) but only difference is by allowing internet to view it.</p>
                        <p> now navigate to instance summery and copy the public IP address of the instance just open it on your browser with <SS>http://public_IP:5000</SS></p>
                        <h2 id="APIGateway">API Gateway</h2>
                        <p>Now we have a container running on the instance with an link <SS>http://public_IP:5000</SS> this link doesn't work when we try to use it on the internet. because it is of "HTTP" based and also when we provide this link to the public internet it means that you are exposing you EC2 instance to the public. it is some time harmful for your instance. so to avoid this and make a safe and secure access to your instance we use API gateway.</p>
                        <blockquote>
                            <p>API Gateway serves as a centralized entry point for managing and routing requests from clients to the appropriate microservices or backend services within a system.</p>
                            <cite></cite>
                        </blockquote>
                        <p><al>API Gateway</al> : API Gateway is a web service that acts as a proxy between your application and the internet. It allows you to secure your API endpoints by allowing only authorized users to access them.</p>
                        <p> now here we are connecting API gateway with EC2 instance. but for a higher load application we need to connect Application load balancer with EC2 instance and then create a API gateway for it (best practice).<a href="https://medium.com/@milesjordan/securing-an-ec2-load-balancer-behind-api-gateway-on-aws-d8d1715eae1f">You can follow this steps to do that</a></p>
                        <p>Also wen you try to use the EC2 public IP as your endpoint, this cant be accessed by the public internet. <SS>How can we create a API gateway for our EC2 Instance?</SS></p>
                        <a href="https://codethief.io/aws-connect-api-gateway-to-ec2/"> <al>You can follow this steps</al></a>
                        
                    `,
  "forward-propagation": `
                        <h2 id="nn">Neural Network</h2>
                        <br><pa>Although a neural network is a black box which is very hard to decode what kind of patterns it is making to produce the high accuracy outputs. a neural network actually been inspired by the biological neural networks. where the flow of information is so complex to understand and explain. the accuracy of a neural network depends on the dimensions. more the dimensions more will be the accuracy. the dimensions are nothing but the number of hidden layers and number of nodes in each hidden layer. more the hidden layers better the system classifies the output. the lays in between the input and output layers are called hidden layers.  </pa><br>
                        <br><pa> So a neural network is basically the connections of nodes. where this nodes are grouped as layers. this layers are classified as input layers, hidden layers and output layers. the nodes in a input layer represents input features and the nodes in output layer represent the predicted output. But the nodes in the hidden layers has some suppurate functionality where it is responsible for the mathematical operations such as Matrix multiplication and activation functions. Each node in the hidden layer is capable of generating outputs by this operations. the nodes in one layer are connected to the nodes in the other layer. this connections are assigned with certain values this are known as the weights. this weights involve in the Matrix multiplication. Each node is assigned with a bias value. Bias is added to the Matrix multiplication to get the output. this output is then passed through the activation function to produce the final output of that particular node. so output of previous layer acts as the input to the next layer. The output of the last layer is the final output. </pa><br>
                        <div class="image-container">
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/ANN/nn1.jpg">📷 IMAGE: <code>../assets/blogs/img/ANN/nn1.jpg</code> — --image title-- <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="p" class="image-description">fig 1 : Artificial Neural Network</p>
                            </div>
                        </div>
                        <br><pa>Understanding higher dimensions of Neural Networks is very difficult. let us consider 4 layers. one Input , 2 Hidden and 1 output. Input with two features(nodes) and output with one feature(nodes). lets consider this as the base NN for further analysis.</pa><br>
                        <p>$$Z=f (WX+b)$$</p>
                        <p>$$X=(X1,X2)$$</p>
                        <p>$$W1=\\begin{pmatrix}
                            w_{11} & w_{12} & w_{13} \\\\
                            w_{21} & w_{22} & w_{23}
                            \\end{pmatrix}$$</p>
                        <p>$$W2=\\begin{pmatrix}
                            w_{11} & w_{12} & w_{13} \\\\
                            w_{21} & w_{22} & w_{23}\\\\
                            w_{31} & w_{32} & w_{33}
                            \\end{pmatrix}$$</p>
                        <p>$$W3=\\begin{pmatrix}
                            w_{11} \\\\
                            w_{21}\\\\
                            w_{31}
                            \\end{pmatrix}$$</p>
                        <br><pa> <ss>X1 , X2</ss> are the input features (x).</pa><br>
                        <br><pa> <SS>W</SS> are the weights.</pa><br>
                        <br><pa> <SS>b</SS> are the biases.</pa><br>
                        <br><pa> <SS>f</SS> represents the activation function.</pa><br>
                        <br><pa> <SS>∑</SS> is mathematical operations</pa><br>
                        <br><pa>So we came across alot of thers like <SS>Activation function, Weights, Biases</SS> These are some of the important concepts to understand in forward propagation</pa><br>
                        
                        <br><p><SS>Why we use weights? </SS> Weights are something that can be interrupted to get our desired output. you can also consider it as the set of values that can be multiplied to the input such that we can get our output. so we always try to change the weights until we get the perfect output. the final weights are used as the multiplicand to the new input to get the prediction result. As you can see in the frame one each node output can be calculated by multiplying that outputs to the weights. The weights are used so that the model can learn the correlation between the inputs and outputs.</p><br>
                        <dev class="image-container">
                            <div class="image-item" style="width: 50%; margin: 0 auto;">
                                <div class="image-placeholder" data-src="../assets/blogs/img/ANN/nn2.jpg">📷 IMAGE: <code>../assets/blogs/img/ANN/nn2.jpg</code> — --image title-- <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="p" class="image-description">fig 2 : Weights</p>
                            </div>
                        </dev>
                        <br><p><SS>Why are Bias?</SS> as wights, Bias in some value that is added to the weighted matrix to shift the output left or right. the bias is also updated every time to get the desired output.</p>
                        <h2 id="activation functions">Activation Function</h2>
                        <br><pa><strong>Why use Activation Function?</strong> The outputs, calculated using weights and biases, are passed through an activation function to introduce non-linearity. An activation function determines which data should proceed forward, enhancing output efficiency by limiting unnecessary data flow through nodes. It is a mathematical operation applied to node outputs that leads to effective learning. For better understanding, consider a classification problem where the node output is a numerical value. Activation functions help convert these numerical outputs into class labels. Functions like sigmoid or tanh adjust the output to determine if it should be activated or remain unchanged.</pa><br>
                        <br><pa>Without an activation function, the model behaves like a linear regression model, producing only numerical outputs. This limitation makes it challenging to perform classification tasks and when dealing with datasets containing only positive values. By applying the ReLU activation function, we can effectively restrict negative values, ensuring more accurate and meaningful predictions.</pa><br>
                        <br><pa>We apply an activation function at each node to ensure that outputs are activated, which enhances the model's ability to solve complex problems and capture non-linear relationships. <SS>Linear functions</SS> allow all data to pass through and are typically used in regression tasks. In contrast, <SS>non-linear functions</SS> introduce non-linearity, transforming outputs before they proceed. Examples include Softmax, Sigmoid, and ReLU.</pa><br>
                        <br><br><SS> Activation functions are classified based on whether it is applied on output or hidden layers and whether the problem statement is classification or regression</SS>
                        <SS></SS>
                        <br><br><br>
                        <dev class="image-container">
                            <div class="image-item">
                                <div class="image-placeholder" data-src="../assets/blogs/img/ANN/af.png">📷 IMAGE: <code>../assets/blogs/img/ANN/af.png</code> — --image title-- <span class="muted">(original asset — drop into <code>src/assets/blogs/</code> and replace)</span></div>
                                <p class="p" class="image-description">fig 3 : Activation functions</p>
                            </div>
                       </div>
                       <p><a href="https://arxiv.org/pdf/2109.14545">Activation functions</a></p>
                       <p><a href="https://www.datacamp.com/tutorial/introduction-to-activation-functions-in-neural-networks">Activation functions</a></p>
                       <p><SS></SS></p>
                </div>
                `,
  "notification-system": `
                        <h2 id="overview" class="section-title">Overview</h2>
                        <p>Pub/Sub is also known to be Publish and Subscribe topology where publishers are some one sending data and subscribers are some one receiving data. This can’t be used in bidirectional communication such as chat applications or important notification systems where the information needs to reliably reach the destination without any data loss.
</p>
                        <p>In Redis, publishers are not programmed to send their messages to specific subscribers. Rather, published messages are sent into channels, without knowledge of what (if any) subscribers there may be.
</p>
                        <p>Similarly, subscribers express interest in one or more channels and only receive messages that are of interest, without knowledge of what (if any) publishers there are.
</p>
                        <p>one major drawback of this pub/sub model is that it is not persisted, that means if a particular subscriber is offline during a period then the messages published at that instance are missed by the user.
</p>
                        <p>Also Redis pub sub will not work with multinode architecture, the reason behand it is due to its low availability and localisation of publisher and subscriber. the Redis connection factory is made for master node not with worker nodes. Redis pub sub is lightening fast coming to live applications due to its single node architecture.
</p>

                        <h2 id="redis-config" class="section-title">Redis Configuration</h2>
                        <div class="highlight">
                            <b>Connection and Template</b>
                        </div>
                        <div class="code-box" id="codeBox1"><button class="copy-btn" onclick="copyCode('codeBox1')">Copy</button>
<pre><code class="language-java">@Bean
public RedisConnectionFactory connectionFactory() {
    return new LettuceConnectionFactory(new RedisStandaloneConfiguration("master", 6379));
}
@Bean
RedisTemplate&lt;String, Object&gt; redisTemplate(RedisConnectionFactory connectionFactory) {
    RedisTemplate&lt;String, Object&gt; template = new RedisTemplate&lt;&gt;();
    template.setConnectionFactory(connectionFactory);
    return template;
}
</code></pre>
                        </div>

                        <h2 id="publisher" class="section-title">Publisher</h2>
                        
                        <p>Publishing of messages through the channel can be done using Redis Connection, Redis Template, or operations like <b>convertAndSend</b>.</p>    
                        <div class="code-box" id="codeBox2"><button class="copy-btn" onclick="copyCode('codeBox2')">Copy</button>
<pre><code class="language-java">RedisOperations operations = …
Long numberOfClients = operations.convertAndSend(&lt;Message&gt;, &lt;Channel&gt;);
</code></pre>
                        </div>
                        <p>
                            Or else we can also create a bean using a custom-built MessagePublisher interface and a RedisMessagePublisher implementation. This way, we can have a generic message-publishing API, and have the Redis implementation take a redisTemplate and topic as constructor arguments:                        </p>
                        <div class="code-box" id="codeBox3"><button class="copy-btn" onclick="copyCode('codeBox3')">Copy</button>
<pre><code class="language-java">@Bean
MessagePublisher redisPublisher() { 
    return new RedisMessagePublisher(redisTemplate(), topic());
}

@Bean
ChannelTopic topic() {
    return new ChannelTopic("messageQueue");
}
</code></pre>
                        </div>

                        <h2 id="subscriber" class="section-title">Subscriber</h2>
                        
                            <p>First, we’ll define a MessageListenerAdapter bean which contains a custom implementation of the MessageListener interface called RedisMessageSubscriber.</p>
                            <p>RedisMessageListenerContainer which provides asynchronous behavior for Redis message listeners. it handles handles the low level details of listening, converting and message dispatching.</p>  
                            <p>Basically Listening of messages are done by Message Listener Adapter and single thread behaviour is achieved by  RedisMessageListenerContainer </p>
                                                  
                        <div class="code-box" id="codeBox4"><button class="copy-btn" onclick="copyCode('codeBox4')">Copy</button>
<pre><code class="language-java">@Bean
MessageListenerAdapter messageListener() { 
    return new MessageListenerAdapter(new RedisMessageSubscriber());
}

@Bean
RedisMessageListenerContainer redisContainer() {
    RedisMessageListenerContainer container 
      = new RedisMessageListenerContainer(); 
    container.setConnectionFactory(connectionFactory); 
    container.addMessageListener(messageListener(), topic()); 
    return container; 
}
</code></pre>
                        </div>

                        <h2 id="publishing-messages" class="section-title">Publishing Messages</h2>
                        <p>As i already mentioned we just required redisConnection or redisTemplte to convert and send message, this template request for Message to be published and on the topic the mssage needs to be published</p>

                        <div class="code-box" id="codeBox5"><button class="copy-btn" onclick="copyCode('codeBox5')">Copy</button>
<pre><code class="language-java">@Repository
public interface MessagePublisher {
    void publish(String message);
}

@Service
public class RedisMessagePublisher implements MessagePublisher {

    @Autowired
    private RedisTemplate&lt;String, Object&gt; redisTemplate;
    @Autowired
    private ChannelTopic topic;

    public RedisMessagePublisher() {
    }

    public RedisMessagePublisher(
      RedisTemplate&lt;String, Object&gt; redisTemplate, ChannelTopic topic) {
      this.redisTemplate = redisTemplate;
      this.topic = topic;
    }

    public void publish(String message) {
        redisTemplate.convertAndSend(topic.getTopic(), message);
    }
}
</code></pre>
                        </div>
                        <p>we are just doing this to have a Implementation consistency in future if the publish logic changes then the message published interface will not have any implementation failure, in future we can implement Redis or any other but we just need to call publish method from MessagePublisher interface.</p>
                        <div class="highlight">
                            <b>convertAndSend</b> is for serialisation<br>
                            <b>topic</b> is the channel (e.g.,imagine just publishing the score of india vs pak match where score is the message and IndVsPak is the topic.).
                        </div>

                        <h2 id="subscribing-channel" class="section-title">Subscribing to Channel</h2>
                        <p>we just implement the message Listener interface and use on Message method to perform some action on receiving the message like storing it in the database and broadcasting to the user via a SSE( server sent event). again tit can be Redis or some other we are just utilising the Message Listener  from adapter</p>
                        <div class="code-box" id="codeBox6"><button class="copy-btn" onclick="copyCode('codeBox6')">Copy</button>
<pre><code class="language-java">@Autowired
private SseController sseController;

@Service
public class RedisMessageSubscriber implements MessageListener {

    public static List&lt;String&gt; messageList = new ArrayList&lt;String&gt;();

    public void onMessage(Message message, byte[] pattern) {
        messageList.add(message.toString());
        sseController.sendMessage(message.toString());
    }
}
</code></pre>
                        </div>

                        <h2 id="sse" class="section-title">SSE for Sending Notifications</h2>
                        <P>we have sseEmitter, on firt request ( if the client calls the /event endpoint) as emmiter is created that is assigned as SseEmitter, this SseEmitter is used to send message to the client.</P>
                        <div class="code-box" id="codeBox7"><button class="copy-btn" onclick="copyCode('codeBox7')">Copy</button>
<pre><code class="language-java">private final CopyOnWriteArrayList&lt;SseEmitter&gt; emitters = new CopyOnWriteArrayList&lt;&gt;();

@GetMapping(value = "/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
public SseEmitter stream() {
    SseEmitter emitter = new SseEmitter();
    emitters.add(emitter);

    emitter.onCompletion(() -> emitters.remove(emitter));
    emitter.onTimeout(() -> emitters.remove(emitter));
    emitter.onError((e) -> emitters.remove(emitter));

    return emitter;
}

public void sendMessage(String message) {
    for (SseEmitter emitter : emitters) {
        try {
            emitter.send(SseEmitter.event().data(message));
        } catch (IOException e) {
            emitters.remove(emitter);
        }
    }
}
</code></pre>
                        </div>
                        <div class="highlight">
                            <b>SseEmitter</b> is created on first request to <code>/stream</code> endpoint.<br>
                            <b>sendMessage()</b> broadcasts to all connected clients, removing any that fail.
                        </div>
                        <P>In sendMessage(), you iterate over emitters and remove any that fail. This is correct.However, you could improve safety by using CopyOnWriteArrayList iterators or by collecting stale emitters and removing them after iteration (to avoid ConcurrentModificationException if you ever switch to a different collection).</P>
                    `,
};
